import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './responses.css';
import { counterContext } from '../../context/context';

const Responses = () => {
    const value = useContext(counterContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (value.isLoggedIn === 0) {
            alert('You need to login first');
            navigate('/admin/login');
        }
    }, [value.isLoggedIn, navigate]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchResponseData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/mail'); // Fetch data from the API
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResponseData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className='back'>
            <button onClick={() => navigate('/admin/dashboard')}>◀️</button>
            </div>
            <div className='responses'>
                <h1>Responses</h1>
                {/* <select id='response-type' defaultValue=''>
                    <option value='' disabled>Select Response Type</option>
                    <option value='all'>All</option>
                    <option value='gen-inq'>General Inquiry</option>
                    <option value='feedback'>Feedback</option>
                    <option value='complaint'>Complaint</option>
                </select> */}
                <ul>
                    {data.map((item, index) => (
                        <li key={index} className='response-card'>
                            <p>Response ID: {item._id}</p>
                            <p>Regarding: {item.regarding}</p>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Message: {item.message}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Responses;
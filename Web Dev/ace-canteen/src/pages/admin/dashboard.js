import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import { counterContext } from '../../context/context';

const Dashboard = () => {
    const navigate = useNavigate();
    const value = useContext(counterContext);

    React.useEffect(() => {
        if (value.isLoggedIn === 0) {
            alert('You need to login first');
            navigate('/admin/login');
        }
    }, [value.isLoggedIn, navigate]);

    return (
        <div className='dashboard'>
            <h1>Admin Dashboard</h1>
            <div className='aboutSite'>
                <div className='details'>
                    <h2>Users</h2>
                    <p>Total Users: 190</p>
                </div>
                <div className='details'>
                    <h2>Orders</h2>
                    <p>Total Orders: 79</p>
                </div>
                <div className='details'>
                    <h2>Revenue</h2>
                    <p>Total Revenue: $75128</p>
                </div>
                <div className='details customerMessages'>
                    <h2>Customer Messages</h2>
                    <button onClick={() => {
                        value.setIsLoggedIn(1);
                        navigate('/admin/responses');
                    }}>View Messages</button>
                </div>
            </div>
            <div className='editMenu'>
                {/* <h2>Edit Menu</h2> */}
                <button onClick={() => {
                    value.setIsLoggedIn(1);
                    navigate('/admin/edit-menu');
                }}>✏️&nbsp;Edit Menu&nbsp;✏️</button>
            </div>
        </div>
    );
};

export default Dashboard;
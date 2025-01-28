import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            setUsername('');
            setPassword('');
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const fetchResponseData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/msg');
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
        if (isLoggedIn) {
            fetchResponseData();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div className='p-5 flex flex-col justify-center items-center' style={{ minHeight: "80vh" }}>
                <h2 className='mx-auto text-3xl font-bold mb-10'>Admin Login</h2>
                <form onSubmit={handleLogin} className='bg-white bg-opacity-15 p-8 rounded-lg w-full max-w-md flex flex-col gap-4'>
                    <div className='mx-auto flex justify-between w-full flex-col sm:flex-row gap-3 sm:gap-0'>
                        <label className='text-xl mx-auto sm:mx-0'>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='admin'
                            className='text-black text-md p-1 w-full sm:max-w-64 mx-auto sm:mx-0'
                        />
                    </div>
                    <div className='mx-auto flex justify-between w-full flex-col sm:flex-row gap-3 sm:gap-0'>
                        <label className='text-xl mx-auto sm:mx-0'>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='password'
                            className='text-black text-md p-1 w-full sm:max-w-64 mx-auto sm:mx-0'
                        />
                    </div>
                    <button type="submit" className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-3 sm:mt-0'>Login</button>
                </form>
            </div>
        );
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='p-5 flex flex-col justify-center items-center' style={{ minHeight: "80vh" }}>
            <h2 className='mx-auto text-3xl font-bold'>Welcome to the Admin Page</h2>
            <div id='responses' className='mx-auto my-10 w-full' style={{ minHeight: "50vh" }}>
                <h3 className='text-2xl font-bold mb-5 text-center'>User Responses:</h3>
                <ul className='w-full max-w-screen-lg flex flex-row justify-center gap-8 flex-wrap mx-auto'>
                    {data.map((item, index) => (
                        <li key={index} className='response-card bg-white bg-opacity-15 p-4 rounded-lg mb-4 w-full max-w-md mx-auto'>
                            <p>Response ID: {item._id}</p>
                            <p>Regarding: {item.regarding}</p>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Message: {item.message}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors' onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
        </div>
    );
};

export default Admin;
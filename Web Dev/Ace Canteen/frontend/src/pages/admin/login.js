import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { counterContext } from '../../context/context';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const value = useContext(counterContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        value.setIsLoggedIn(0);
    }, [value]);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        if (username === 'admin' && password === 'password') {
            value.setIsLoggedIn(1);
            navigate('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div style={{ textAlign: 'center' }}>
                <p>&#40; Username: admin &#41;</p>
                <p>&#40; Password: password &#41;</p>
            </div>
        </div>  
    );
};

export default AdminLogin;
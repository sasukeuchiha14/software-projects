import React from 'react';
import './dashboard.css';

const Dashboard = () => {
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
                    <button onClick={() => window.location.href = '/admin/responses'}>View Messages</button>
                </div>
            </div>
            <div className='editMenu'>
                {/* <h2>Edit Menu</h2> */}
                <button onClick={() => window.location.href = '/admin/edit-menu'}>✏️&nbsp;Edit Menu&nbsp;✏️</button>
            </div>
        </div>
    );
};

export default Dashboard;
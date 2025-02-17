import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './edit_menu.css'
import { counterContext } from '../../context/context';

const EditMenu = () => {
    const value = useContext(counterContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (value.isLoggedIn === 0) {
            alert('You need to login first');
            navigate('/admin/login');
        }
    }, [value.isLoggedIn, navigate]);

    const [week, setWeek] = useState('week1');
    const [day, setDay] = useState('mon');
    const [time, setTime] = useState('breakfast');
    const [currentItem, setCurrentItem] = useState('');

    const getContent = async (week, time, day) => {
        try {
          const response = await fetch(`http://localhost:5000/api/menu/${week}?time=${time}&day=${day}`); // Fetch data from the API
          const menu = await response.json();
          setCurrentItem(menu.content);
        } catch (error) {
          console.error('Error fetching menu data:', error);
        }
    }

    React.useEffect(() => {
        getContent(week, time, day);
    }, [week, time, day]);

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/edit_menu/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    week: week,
                    day: day,
                    time: time,
                    newItem: document.getElementById('newItem').value
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            alert('Menu item updated successfully!');
        } catch (error) {
            console.error('Error submitting edit menu:', error);
        }
    }

    return (
        <>
            <div className='back'>
                <button onClick={() => navigate('/admin/dashboard')}>◀️</button>
            </div>
            <form className='edit-menu' onSubmit={handleEditSubmit}>
                <div>
                    <label htmlFor='select_week'>Week:</label>
                    <select id='select_week' name="select_week" required onChange={(e) => setWeek(e.target.value)}>
                        <option value='week1'>Week 1</option>
                        <option value='week2'>Week 2</option>
                        <option value='week3'>Week 3</option>
                        <option value='week4'>Week 4</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='select_day'>Day:</label>
                    <select id='select_day' name="select_day" required onChange={(e) => setDay(e.target.value)}>
                        <option value='mon'>Monday</option>
                        <option value='tue'>Tuesday</option>
                        <option value='wed'>Wednesday</option>
                        <option value='thu'>Thursday</option>
                        <option value='fri'>Friday</option>
                        <option value='sat'>Saturday</option>
                        <option value='sun'>Sunday</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='selectTime'>Time:</label>
                    <select id='select_time' name="selectTime" required onChange={(e) => setTime(e.target.value)}>
                        <option value='breakfast'>Breakfast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='snack'>Snack</option>
                        <option value='dinner'>Dinner</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='currentItem'>Current Item:</label>
                    <p id='currentItem' name="currentItem">
                        <span style={{ 'position':'relative', 'display':'inline-block', 'width':'100%' }}>
                            { currentItem }
                        </span>
                    </p>
                </div>
                <div>
                    <label htmlFor='newItem'>Enter New Item:</label>
                    <input id='newItem' type="text" name="newItem" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EditMenu;
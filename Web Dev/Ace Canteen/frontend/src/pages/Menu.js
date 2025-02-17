import React, { Component } from 'react';
import './Menu.css';

class Home extends Component {
  getContent = async (week, time, day) => {
    try {
      const response = await fetch(`http://localhost:5000/api/menu/${week}?time=${time}&day=${day}`); // Fetch data from the API
      const menu = await response.json();
      return menu.content;
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  }

  addTime = async (week, name, time) => {
    const tr = document.createElement('tr');
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const content = await Promise.all(days.map(day => this.getContent(week, time, day)));
    tr.innerHTML = `
      <td>${name}</td>
      ${content.map(item => `<td>${item}</td>`).join('')}
    `;
    
    document.getElementsByTagName('tbody')[0].appendChild(tr);
  }

  componentDidMount() {
    document.getElementById('week').addEventListener('change', this.fetchMenuData);
    // document.getElementById('week').dispatchEvent(new Event('change'));
  }

  handleWeekChange = () => {
    this.fetchMenuData();
  }

  fetchMenuData = async () => {
    const week = document.getElementById('week').value;

    document.getElementsByTagName('tbody')[0].innerHTML = '';

    await this.addTime(week, 'Breakfast', 'breakfast');
    await this.addTime(week, 'Lunch', 'lunch');
    await this.addTime(week, 'Snack', 'snack');
    await this.addTime(week, 'Dinner', 'dinner');
  }

  render() {
    return (
      <div id="menu-table">
        <caption>
          <select id="week" name="week" defaultValue="">
            <option value="" disabled>Select a week</option>
            <option value="week1">Week 1</option>
            <option value="week2">Week 2</option>
            <option value="week3">Week 3</option>
            <option value="week4">Week 4</option>
          </select>
        </caption>

        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </div>
    );
  }
}

export default Home;
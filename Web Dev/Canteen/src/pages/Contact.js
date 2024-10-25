import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create the body object
    const body = {
      regarding: document.getElementById('form-regarding').value,
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    try {
      const response = await fetch('http://localhost:5000/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      // Check if the response is ok
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data); // Log the response data
        alert('Message sent successfully!'); // Show success alert
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      }
      else {
        console.error('Error:', response.statusText);
        alert('Failed to send message. Please try again.'); // Show error alert
      }
    }
    catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.'); // Show error alert
    }
  };

  return (
    <form id="form-container" className="contact-form" onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ width: '48%' }}>
          <h2>REGARDING?</h2>
          <select id="form-regarding" required>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Complaint">Complaint</option>
          </select>
          <h2>NAME</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input id="form-first-name" type="text" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: '48%' }} />
            <input id="form-last-name" type="text" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: '48%' }} />
          </div>
          <h2>EMAIL</h2>
          <input id="form-email" type="email" placeholder="example@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ width: '48%' }}>
          <h2>MESSAGE</h2>
          <textarea id="form-text" placeholder="Description" required value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%' }}></textarea>
        </div>
      </div>
      <button id="form-submit" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

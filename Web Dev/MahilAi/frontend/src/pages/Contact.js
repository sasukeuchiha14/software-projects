import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = {
            regarding: document.getElementById('form-regarding').value,
            ...formData
        };

        try {
            const response = await fetch('http://localhost:5000/api/msg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Error:', response.statusText);
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-5 flex flex-col justify-center items-center" style={{minHeight:"80vh"}}>
            <h1 className="text-white text-4xl font-bold mb-10">Contact Us</h1>
            {loading ? (
                <div className="text-white text-2xl">Loading...</div>
            ) : (
                <form id="form-container" onSubmit={handleSubmit} className="bg-white bg-opacity-15 p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
                        <div className="w-full sm:w-1/2">
                            <h2 className="text-xl mb-2">REGARDING?</h2>
                            <select id="form-regarding" defaultValue="General Inquiry" required className="w-full p-4 border bg-white bg-opacity-0 rounded mb-4 text-md">
                                <option value="General Inquiry" className='text-black'>General Inquiry</option>
                                <option value="Feedback" className='text-black'>Feedback</option>
                                <option value="Complaint" className='text-black'>Complaint</option>
                            </select>

                            <h2 className="text-xl mb-2">NAME</h2>
                            <div className="flex justify-between gap-4 mb-4">
                                <input id="form-first-name" className="w-1/2 p-4 border bg-white bg-opacity-0 rounded text-lg" type="text" placeholder="First Name" name="firstName" required value={formData.firstName} onChange={handleChange}/>
                                <input id="form-last-name" type="text" placeholder="Last Name" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-1/2 p-4 border bg-white bg-opacity-0 rounded text-lg"/>
                            </div>

                            <h2 className="text-xl mb-2">EMAIL</h2>
                            <input id="form-email" type="email" placeholder="example@example.com" name="email" required value={formData.email} onChange={handleChange} className="w-full p-4 border bg-white bg-opacity-0 rounded text-lg"/>
                        </div>

                        <div className="w-full sm:w-1/2">
                            <h2 className="text-xl mb-2">MESSAGE</h2>
                            <textarea id="form-text" placeholder="Description" name="message" required value={formData.message} onChange={handleChange} className="w-full p-4 border bg-white bg-opacity-0 rounded min-h-[200px] h-full max-h-[285px] text-lg"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button id="form-submit" type="submit" className="mt-5 bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors">
                            Send
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Contact;
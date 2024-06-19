import React, { useState } from 'react';

const VolunteerSignup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log(formData);
        alert('Thank you for signing up!');
    };

    return (
        <div>
            <h2>Volunteer Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Role:</label>
                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select a role</option>
                        <option value="first-aid">First Aid</option>
                        <option value="lawyer">Lawyer</option>
                        <option value="logistics">Logistics</option>
                    </select>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default VolunteerSignup;

import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/users', { username, email, password });
            alert('User created!');
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholdser="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Create User</button>
        </form>
    );
}

export default UserForm;

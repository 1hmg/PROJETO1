import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users');
                setUsers(response.data);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username} ({user.email})</li>
            ))}
        </ul>
    );
}

export default UserList;
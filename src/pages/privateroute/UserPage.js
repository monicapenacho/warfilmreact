// UserPage.js
import React, { useEffect, useState } from 'react';

function UserPage() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchData();
    }, []);

    return <div>{message}</div>;
}

export default UserPage;

//client npm install react-router-dom 
//server npm install cors express jsonwebtoken
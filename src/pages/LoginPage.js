// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
            // const response = await fetch('https://warfilm.onrender.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                setError('Login failed. Please check your credentials.');
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/user');                             
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default LoginPage;


//client npm install react-router-dom 
//server npm install cors express jsonwebtoken

// <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
// <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
// <button onClick={handleLogin}>Login</button>

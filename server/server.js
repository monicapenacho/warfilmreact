// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const port = 5000;
app.use(cors());  // Permitir CORS para todas las solicitudes

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

const users = {
    'user1': { password: 'password1', role: 'user' },
    'admin1': { password: 'password1', role: 'admin' }
};

const secretKey = 'your_secret_key';

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users[username];

    if (user && user.password === password) {
        const token = jwt.sign({ username, role: user.role }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const authorizeRole = (role) => (req, res, next) => {
    if (req.user.role === role) {
        next();
    } else {
        res.sendStatus(403);
    }
};

app.get('/api/user', authenticateToken, (req, res) => {
    res.json({ message: 'Hello User!' });
});

app.get('/api/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.json({ message: 'Hello Admin!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

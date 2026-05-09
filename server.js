const express = require('express');
const app = express();
app.use(express.json());

let users = []; // Memory mein data save hoga

app.post('/api/auth/register', (req, res) => {
    users.push(req.body);
    res.json({ message: "User registered successfully (In-Memory)!" });
});

app.get('/', (req, res) => res.send('API is running without DB for testing...'));
app.listen(5000, () => console.log('🚀 Server started on port 5000'));

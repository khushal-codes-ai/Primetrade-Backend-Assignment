const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer [token]"

    if (!token) return res.status(403).send('No token provided.');

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
       
        if (err) return res.status(500).send('Failed to authenticate token.');
        req.userId = decoded.id; // Set userId from the token
        next();
    });
};
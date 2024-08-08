const db = require('../config/database');

const User = {
    create: (user, callback) => {
        const query = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(query, [user.name, user.email, user.phone, user.password], callback);
    },
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            // Make sure you return the correct result
            callback(null, results);
        });
    },

    updateCredits: (id, credits, callback) => {
        const query = 'UPDATE users SET credits = ? WHERE id = ?';
        db.query(query, [credits, id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    }
};


module.exports = User;

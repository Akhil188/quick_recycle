const db = require('../config/database');

const Recycle = {
    create: (recycle, callback) => {
        const query = 'INSERT INTO recycled_items (user_id, item_type, weight, credits_earned) VALUES (?, ?, ?, ?)';
        db.query(query, [recycle.user_id, recycle.item_type, recycle.weight, recycle.credits_earned], callback);
    },
    findByUserId: (user_id, callback) => {
        const query = 'SELECT * FROM recycled_items WHERE user_id = ?';
        db.query(query, [user_id], callback);
    }
};

module.exports = Recycle;

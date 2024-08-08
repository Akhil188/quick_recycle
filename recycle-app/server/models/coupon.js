const db = require('../config/database');

const Coupon = {
    create: (coupon, callback) => {
        const query = 'INSERT INTO coupons (name, credits_needed, exp_date,value, status) VALUES (?, ?, ?,?, ?)';
        db.query(query, [coupon.name, coupon.credits_needed, coupon.exp_date, coupon.value, coupon.status], callback);
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM coupons';
        db.query(query, [], callback);
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM coupons WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            // Ensure the results are as expected
            callback(null, results);
        });
    },
    update: (id, updates, callback) => {
        const query = 'UPDATE coupons SET name = ?, credits_needed = ?, exp_date = ?,value = ? status = ? WHERE id = ?';
        db.query(query, [updates.name, updates.credits_needed, updates.exp_date, updates.value, updates.status, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM coupons WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Coupon;

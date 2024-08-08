const db = require('../config/database');

const UserCoupon = {
    create: (user_coupon, callback) => {
        const query = 'INSERT INTO user_coupons (user_id, coupon_id, name, exp_date, value) VALUES (?, ?,?,?,?)';
        db.query(query, [user_coupon.user_id, user_coupon.coupon_id,user_coupon.name, user_coupon.exp_date, user_coupon.value], callback);
    },
    findByUserId: (user_id, callback) => {
        const query = 'SELECT * FROM user_coupons WHERE user_id = ?';
        db.query(query, [user_id], callback);
    },
    findByCouponId: (coupon_id, callback) => {
        const query = 'SELECT * FROM user_coupons WHERE coupon_id = ?';
        db.query(query, [coupon_id], callback);
    },
    findByUserAndCoupon: (user_id, coupon_id, callback) => {
        const query = 'SELECT * FROM user_coupons WHERE user_id = ? AND coupon_id = ?';
        db.query(query, [user_id, coupon_id], callback);
    },
    delete: (user_id, coupon_id, callback) => {
        const query = 'DELETE FROM user_coupons WHERE user_id = ? AND coupon_id = ?';
        db.query(query, [user_id, coupon_id], callback);
    }
};

module.exports = UserCoupon;

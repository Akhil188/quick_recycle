// controllers/couponController.js
const UserCoupon = require('../models/usercoupon');
const Coupon = require('../models/coupon');
const User = require('../models/user');
// User redeem a coupon
exports.redeemCoupon = (req, res) => {
    const { coupon_id } = req.body;
    const user_id = req.userId; // Use userId from the middleware

    if (!user_id) return res.status(400).send('User ID is missing.');

    // Check if the user already redeemed the coupon
    UserCoupon.findByUserAndCoupon(user_id, coupon_id, (err, existingUserCoupon) => {
        if (err) {
            console.error('Error checking coupon redemption:', err);
            return res.status(500).send('Error checking coupon redemption.');
        }
        if (existingUserCoupon.length > 0) return res.status(400).send('Coupon already redeemed.');

        // Find the coupon details
        Coupon.findById(coupon_id, (err, coupons) => {
            if (err) {
                console.error('Error fetching coupon:', err);
                return res.status(500).send('Error fetching coupon.');
            }
            if (coupons.length === 0) return res.status(404).send('Coupon not found.');

            const coupon = coupons[0];
            console.log('Coupon:', coupon);
            
            // Check if the user has enough credits
            User.findById(user_id, (err, users) => {
                if (err) {
                    console.error('Error fetching user:', err);
                    return res.status(500).send('Error fetching user.');
                }
                if (users.length === 0) return res.status(404).send('User not found.');

                const user = users[0];
                console.log('User:', user);

                if (user.credits < coupon.credits_needed) return res.status(400).send('Not enough credits.');

                // Redeem the coupon
                UserCoupon.create({ user_id, coupon_id, name: coupon.name, exp_date: coupon.exp_date, value: coupon.value }, (err, result) => {
                    if (err) {
                        console.error('Error redeeming coupon:', err);
                        return res.status(500).send('Error redeeming coupon.');
                    }

                    // Deduct the credits from the user
                    User.updateCredits(user_id, -coupon.credits_needed, (err, result) => {
                        if (err) {
                            console.error('Error updating user credits:', err);
                            return res.status(500).send('Error updating user credits.');
                        }
                        res.status(200).send('Coupon redeemed successfully.');
                    });
                });
            });
        });
    });
};


// Get coupons redeemed by a user
exports.getUserCoupons = (req, res) => {
    const user_id = req.userId; // Use userId from the middleware

    if (!user_id) return res.status(400).send('User ID is missing.');

    UserCoupon.findByUserId(user_id, (err, userCoupons) => {
        if (err) return res.status(500).send('Error fetching user coupons.');
        res.status(200).json(userCoupons);
    });
};

// Get users who redeemed a coupon
exports.getCouponUsers = (req, res) => {
    const { coupon_id } = req.params;

    UserCoupon.findByCouponId(coupon_id, (err, userCoupons) => {
        if (err) return res.status(500).send('Error fetching coupon users.');
        res.status(200).json(userCoupons);
    });
};

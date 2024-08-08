const express = require('express');
const userCouponController = require('../controllers/usercouponController.js');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Redeem a coupon (User authentication required)
router.post('/redeem', authMiddleware, userCouponController.redeemCoupon);

// Get all coupons redeemed by a user (User authentication required)
router.get('/my-coupons', authMiddleware, userCouponController.getUserCoupons);

// Get all users who redeemed a specific coupon (Admin or authorized user required)
router.get('/coupon-users/:coupon_id', authMiddleware, userCouponController.getCouponUsers);

module.exports = router;

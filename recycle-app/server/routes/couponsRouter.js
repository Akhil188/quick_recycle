const express = require('express');
const couponController = require('../controllers/couponController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new coupon (Admin or authorized user required)
router.post('/', couponController.createCoupon);

// Get all coupons (Accessible to all users)
router.get('/', couponController.getAllCoupons);

// Get a coupon by ID (Accessible to all users)
router.get('/:id', couponController.getCouponById);

// Update a coupon by ID (Admin or authorized user required)
router.put('/:id', couponController.updateCoupon);

// Delete a coupon by ID (Admin or authorized user required)
router.delete('/:id', couponController.deleteCoupon);

module.exports = router;

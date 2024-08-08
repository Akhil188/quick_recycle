const Coupon = require('../models/coupon');

// Create a new coupon
exports.createCoupon = (req, res) => {
    const { name, credits_needed, exp_date,value, status } = req.body;

    Coupon.create({ name, credits_needed, exp_date,value, status }, (err, result) => {
        if (err) return res.status(500).send('Error creating coupon.');
        res.status(201).send('Coupon created successfully.');
    });
};

// Get all coupons
exports.getAllCoupons = (req, res) => {
    Coupon.findAll((err, coupons) => {
        if (err) return res.status(500).send('Error fetching coupons.');
        res.status(200).json(coupons);
    });
};

// Get a coupon by ID
exports.getCouponById = (req, res) => {
    const { id } = req.params;

    Coupon.findById(id, (err, coupons) => {
        if (err) return res.status(500).send('Error fetching coupon.');
        if (coupons.length === 0) return res.status(404).send('Coupon not found.');
        res.status(200).json(coupons[0]);
    });
};

// Update a coupon
exports.updateCoupon = (req, res) => {
    const { id } = req.params;
    const { name, credits_needed, exp_date, value, status } = req.body;

    Coupon.update(id, { name, credits_needed, exp_date, value, status }, (err, result) => {
        if (err) return res.status(500).send('Error updating coupon.');
        res.status(200).send('Coupon updated successfully.');
    });
};

// Delete a coupon
exports.deleteCoupon = (req, res) => {
    const { id } = req.params;

    Coupon.delete(id, (err, result) => {
        if (err) return res.status(500).send('Error deleting coupon.');
        res.status(200).send('Coupon deleted successfully.');
    });
};

const Recycle = require('../models/recycle');
const User = require('../models/user');

exports.recycleItem = (req, res) => {
    const { item_type, weight } = req.body;
    const user_id = req.userId; // Use userId from the middleware
    if (!user_id) return res.status(400).send('User ID is missing.');
    
    const credits_earned = calculateCredits(weight);

    Recycle.create({ user_id, item_type, weight, credits_earned }, (err, result) => {
        if (err) return res.status(500).send('Error recycling item.');

        User.updateCredits(user_id, credits_earned, (err, result) => {
            if (err) return res.status(500).send('Error updating user credits.');
            res.status(200).send({ credits_earned });
        });
    });
};

exports.getRecycledItemsByUser = (req, res) => {
    const user_id = req.userId; // Use userId from the middleware
    if (!user_id) return res.status(400).send('User ID is missing.');

    Recycle.findByUserId(user_id, (err, items) => {
        if (err) return res.status(500).send('Error fetching recycled items.');
        res.status(200).json(items);
    });
};

const calculateCredits = (weight) => {
    // Simple credit calculation: 1 credit per kg
    return Math.floor(weight);
};

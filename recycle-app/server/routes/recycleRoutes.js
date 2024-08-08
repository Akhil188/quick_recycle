const express = require('express');
const recycleController = require('../controllers/recycleController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/recycle', authMiddleware, recycleController.recycleItem)
router.get('/recycled-items', authMiddleware, recycleController.getRecycledItemsByUser);

module.exports = router;

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const recycleRoutes = require('./routes/recycleRoutes');
const couponsRoutes = require('./routes/couponsRouter.js');
const userCouponsRoutes = require('./routes/userCouponsRoutes');
const cors = require('cors'); // Import the cors package
const app = express();

// Allow all origins
app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/recycle', recycleRoutes);
app.use('/coupons', couponsRoutes);
app.use('/user-coupons', userCouponsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

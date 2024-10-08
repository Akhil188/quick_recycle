const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res) => {
    const { name, email, phone, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create({ name, email, phone, password: hashedPassword }, (err, result) => {
        if (err) return res.status(500).send('Error registering user.');
        res.status(200).send('User registered successfully.');
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, users) => {
        if (err || users.length === 0) return res.status(404).send('User not found.');

        const user = users[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password.');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    });
};

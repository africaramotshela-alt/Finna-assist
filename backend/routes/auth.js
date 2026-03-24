const router = require('express').Router();
const jwt = require('jsonwebtoken');

const ADMIN_EMAIL = "tshogofatsoramotshela@gmail.com";
const ADMIN_PASSWORD = "RamotshelaAFRICA24";
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
       
       return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;    
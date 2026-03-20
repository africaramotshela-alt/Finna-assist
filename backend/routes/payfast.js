const router = require('express').Router();
const Donation = require('../models/Donation');

router.post('/notify', async (req, res) => {
    const data = req.body;
    if (data.payment_status === 'COMPLETE') {
        await Donation.create({
            amount: data.amount_gross,
            verified: true
        });
    }
    res.status(200).send('OK');
});

module.exports = router;   

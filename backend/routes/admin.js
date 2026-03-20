const router = require('express').Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Donation = require('../models/Donation');

router.get('/stats', auth, async (req, res) => {
    const users = await User.countDocuments();
    const donations = await Donation.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
    res.json({ users, totalDonations: donations[0] ? donations[0].total : 0 });

}   );

module.exports = router;    
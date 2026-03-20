const router = require('express').Router();
const Donation = require('../models/Donation');

router.get('/total', async (req, res) => {
  const total = await Donation.aggregate([{ $group: { _id: null, sum: { $sum: "$amount" }}}]);
  res.json({ total: total[0]?.sum || 0 });
});

router.post('/', async (req, res) => {
  const donation = new Donation({ amount: 10 });
  await donation.save();
  res.json(donation);
});

module.exports = router;

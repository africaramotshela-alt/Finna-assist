const router = require('express').Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

router.get('/leaderboard', async (req, res) => {
  const users = await User.find().limit(10);
  res.json(users);
});

module.exports = router;

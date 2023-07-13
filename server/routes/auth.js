import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { email, username, password, avatar } = req.body;
    const newUser = new User({
      email,
      username,
      password,
      avatar,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { email, username, password, avatar } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      avatar,
    });
    const user = await newUser.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).select('+password').exec();
    console.log(user);
    if (!user) {
      res.status(404).json('invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(403).json('invalid credentials');
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

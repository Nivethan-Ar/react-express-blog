import User from '../models/user.js';
import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  if (password) {
    const saltRounds = 10;
    req.body.password = await bcrypt.hash(password, saltRounds);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .select('+password')
      .exec();

    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

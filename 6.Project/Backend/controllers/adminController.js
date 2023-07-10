const User = require('../models/User');

exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const admin = await User.create({
      name,
      email,
      password,
      isAdmin: true,
    });

    res.status(201).json({ admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateUserRole = async (req, res) => {
  const { userId } = req.params;
  const { isAdmin } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { isAdmin },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const result = await User.find();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getSingleProfile = async (req, res) => {
  try {
    const { userId } = req.decoded;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// Update user profile
exports.updateProfile = async (req, res) => {
  const { bio, location, website } = req.body;
  const userId = req.userId;

  try {
    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the profile fields
    user.bio = bio || user.bio;
    user.location = location || user.location;
    user.website = website || user.website;

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

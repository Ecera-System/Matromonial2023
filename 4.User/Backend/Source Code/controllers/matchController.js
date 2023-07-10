const User = require('../models/User');

// Controller to search for matches based on parameters
// exports.searchMatches = async (req, res) => {
//   try {
//     const queryData = req.query;
//     console.log(queryData);

//     // Add additional search criteria if needed
//     // const matches = await User.find({ age, gender });

//     res.status(200).json('Router is ok!');
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// Controller to send a connection request
exports.sendConnectionRequest = async (req, res) => {
  try {
    const { userId, connectionId } = req.body;

    // Add the connectionId to the user's connections array
    await User.findByIdAndUpdate(userId, {
      $addToSet: { connections: connectionId },
    });

    res.json({ message: 'Connection request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
import User from "../models/user.model.js";

export const getAllUser = async (req, res) => {
  const loggedInUser = req.senderId;
  try {
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    if (!allUsers) {
      return res.status(404).json({
        msg: "No users found",
        success: false,
      });
    }
    return res.status(200).json({
      msg: "Found all users",
      success: true,
      users: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Server error",
      success: false,
    });
  }
};

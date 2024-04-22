import { getProfilePicString } from "../constants/constants.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const signUpUser = async (req, res) => {
  const { username, password, fullName, gender } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({
      msg: "Username already exists",
      success: false,
    });
  }
  const profilepic = getProfilePicString(username, gender);

  try {
    const hashedPass = await bcrypt.hashSync(password, 10);
    const user = await User.create({
      username,
      password: hashedPass,
      fullName,
      gender,
      profilepic,
    });

    // Exclude password field from the returned user object
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    if (user) {
      await generateToken(user._id, res);
    } else {
      return res.status(404).json({
        msg: "Error creating user",
        success: false,
      });
    }
    return res.status(200).json({
      msg: "User created successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error creating user",
      error: error.message,
      success: false,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        msg: "username not found!! Kindly register yourself",
        success: false,
      });
    }

    const compare = bcrypt.compareSync(password, user.password);
    if (!compare) {
      return res.status(401).json({
        success: false,
        msg: "Please check your password",
      });
    }
    let token = await generateToken(user._id, res);
    return res.status(200).json({
      msg: "Login successfull",
      success: true,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error logging in user",
      error: error.message,
      success: false,
    });
  }
};

export const logOutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({
      msg: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error while logging out",
      error: error.message,
      success: false,
    });
  }
};

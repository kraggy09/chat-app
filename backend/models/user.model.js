import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter the full name"],
    },
    username: {
      type: String,
      required: [true, "Please enter the full name"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter the password"],
      minLength: 6,
    },
    profilepic: {
      type: String,
      required: [true, "Please enter profile pic url"],
    },
    gender: {
      type: String,
      required: [true, "Please enter the gender of the user"],
      enum: ["male", "female", "null"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

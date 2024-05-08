import mongoose from "mongoose";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  let recieverId = req.params.recieverId;
  let senderId = req.senderId;

  try {
    const sender = await User.findOne({ _id: senderId });
    const reciever = await User.findOne({ _id: recieverId });
    if (!sender || !reciever) {
      return res.status(404).json({
        msg: "Please send the correct users",
        success: false,
      });
    }
    const sentMessage = await Message.create({
      senderId,
      recieverId,
      message,
    });
    if (!sentMessage) {
      return res.status(400).json({
        success: false,
        msg: "Issue while creating message",
      });
    }
    return res.status(200).json({
      msg: "Message sent successfully",
      message: sentMessage,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error!! Unable to send message",
      error: error.message,
    });
  }
};

export const getAllMessages = async (req, res) => {
  let recieverId = req.params.recieverId;
  let senderId = req.senderId;
  senderId = new mongoose.Types.ObjectId(senderId);
  recieverId = new mongoose.Types.ObjectId(recieverId);
  console.log(recieverId, senderId);
  const pipeline = [
    //Stage 1-----> Match all the documents with senderId or recieverId

    {
      $match: {
        $or: [
          {
            senderId,
            recieverId,
          },
          {
            senderId: recieverId,
            recieverId: senderId,
          },
        ],
      },
    },
    //Stage-2-------> Sorting based on the createdAt field to sort message according to time
    {
      $sort: { createdAt: 1 },
    },
    //Stage-3--------> Grouping all messages ad conversation
    {
      $group: {
        _id: null, //Used as null to group all the documents in a single one
        conversation: { $push: "$$ROOT" },
      },
    },
    //Stage-4------> Used to remove the _id field from the final result
    {
      $project: {
        _id: 0,
        conversation: 1,
      },
    },
  ];
  try {
    const result = await Message.aggregate(pipeline);
    if (result.length == 0) {
      return res.status(300).json({
        msg: "No conversation found between them",
        success: true,
      });
    }
    console.log(result[0].conversation);
    return res.status(200).json({
      msg: "Conversation found",
      messages: result[0].conversation,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
      error: error.message,
      success: true,
    });
  }
};

const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  answer1: {
    type: String,
    required: [true, "Please enter your response."],
  },

  answer2: {
    type: String,
    required: [true, "Please enter your response."],
  },

  answer3: {
    type: String,
    required: [true, "Please enter your response."],
  },

  answer4: {
    type: String,
    required: [true, "Please enter your response."],
  },
});

module.exports = mongoose.model("Responses", responseSchema);

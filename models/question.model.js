const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: (options) => options.length === 4,
      message: "Options must be 4",
    },
  },
  correctOptionIndex: {
    type: Number,
    required: true,
    validate: {
      validator: (correctOptionIndex) =>
        correctOptionIndex >= 0 && correctOptionIndex <= 3,
      message: "Correct option index must be between 0 and 3",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

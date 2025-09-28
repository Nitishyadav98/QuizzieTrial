const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Text", "Image URL", "Text & Image URL"],
    required: true,
  },
  questionText: { type: String, required: true },
  imageUrl: { type: String }, // optional for image-based questions
  options: [optionSchema],
  timer: {
    type: Number,
    enum: [5, 10],
    default: 5,
  },
});

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["Q&A", "Poll"],
    required: true,
  },
  questions: [questionSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  publishedLink: { type: String }, // e.g. https://quizzie.app/quiz/abc123
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", quizSchema);

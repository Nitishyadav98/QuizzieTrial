const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  options: [
    {
      option: { type: String },
      optionChosen: { type: Number },
    },
  ],
});

const optionSchema = new mongoose.Schema({
  options: [
    {
      option: { type: String },
      optionChosen: { type: Number },
      status: { type: String, enum: ["right", "wrong"] },
    },
  ],
  rightAttempts: { type: Number },
  wrongAttempts: { type: Number },
});

const quizSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  quizName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  quizType: { type: String, enum: ["poll", "QandA"] },
  useremail: { type: String },
  questions: [
    {
      questionId: { type: String, required: true },
      question: { type: String, required: true },
      numberOfAttempts: { type: Number },
      questionType: { type: String, enum: ["text", "image", "textandimage"] },
      pollQuestionOptions: pollSchema,
      optionQuestionOptions: optionSchema,
    },
  ],
  quizAttempts: { type: Number },
});

module.exports = mongoose.model("QuizSchema", quizSchema);

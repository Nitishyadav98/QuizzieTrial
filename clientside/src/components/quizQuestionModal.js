import React, { useState } from "react";
import styles from "./quizQuestionModal.module.css";

const QuizQuestionModal = ({ onClose }) => {
  const [questions, setQuestions] = useState([
    { type: "Text", question: "", options: ["", ""], timer: 5 },
  ]);

  const addQuestion = () => {
    if (questions.length < 5) {
      setQuestions([
        ...questions,
        { type: "Text", question: "", options: ["", ""], timer: 0 },
      ]);
    }
  };

  const deleteQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ❌
        </button>
        <h2>For Q N A</h2>

        <div className={styles.topActions}>
          <button onClick={addQuestion} disabled={questions.length >= 5}>
            ➕
          </button>
        </div>

        {questions.map((q, index) => (
          <div key={index} className={styles.questionBlock}>
            <div className={styles.qHeader}>
              <h4>Question {index + 1}</h4>
              <button onClick={() => deleteQuestion(index)}>❌</button>
            </div>

            <label>Question Type</label>
            <select
              value={q.type}
              onChange={(e) => {
                const updated = [...questions];
                updated[index].type = e.target.value;
                setQuestions(updated);
              }}
            >
              <option>Text</option>
              <option>Image URL</option>
              <option>Text & Image URL</option>
            </select>

            <label>Question</label>
            <input
              type="text"
              placeholder="Enter your question"
              value={q.question}
              onChange={(e) => {
                const updated = [...questions];
                updated[index].question = e.target.value;
                setQuestions(updated);
              }}
            />

            <label>Options</label>
            {q.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Option ${i + 1}`}
                value={opt}
                onChange={(e) => {
                  const updated = [...questions];
                  updated[index].options[i] = e.target.value;
                  setQuestions(updated);
                }}
              />
            ))}

            <label>Timer</label>
            <div className={styles.timer}>
              <button
                className={q.timer === 0 ? styles.active : ""}
                onClick={() => {
                  const updated = [...questions];
                  updated[index].timer = 0;
                  setQuestions(updated);
                }}
              >
                Off Timer
              </button>
              <button
                className={q.timer === 5 ? styles.active : ""}
                onClick={() => {
                  const updated = [...questions];
                  updated[index].timer = 5;
                  setQuestions(updated);
                }}
              >
                5 sec
              </button>
              <button
                className={q.timer === 10 ? styles.active : ""}
                onClick={() => {
                  const updated = [...questions];
                  updated[index].timer = 10;
                  setQuestions(updated);
                }}
              >
                10 sec
              </button>
            </div>
          </div>
        ))}

        <div className={styles.actions}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.create}>Create Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionModal;

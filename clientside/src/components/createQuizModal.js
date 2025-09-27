import React from "react";
import styles from "./createQuizModal.module.css";
import { useState } from "react";

const CreateQuizModal = ({ onClose, onContinue }) => {
  const [selectedType, setSelectedType] = useState("Q&A");

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ❌
        </button>
        <h2>Create Quiz</h2>

        <label className={styles.label}>Quiz name</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter quiz name"
        />

        <div className={styles.radioGroup}>
          <label className={styles.label}>Quiz Type</label>

          <div
            className={`${styles.radioOption} ${
              selectedType === "Q&A" ? styles.active : ""
            }`}
            onClick={() => setSelectedType("Q&A")}
          >
            <span className={styles.radioCircle}></span>Q & A
          </div>
          <div
            className={`${styles.radioOption} ${
              selectedType === "Poll" ? styles.active : ""
            }`}
            onClick={() => setSelectedType("Poll")}
          >
            <span className={styles.radioCircle}></span>
            Poll Type
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.continue} onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizModal;

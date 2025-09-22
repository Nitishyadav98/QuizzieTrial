import styles from "./trendingQuiz.module.css";

const Quizs = ({ index, createdTime, seen }) => {
  return (
    <div className={styles.trendingquizcontainer}>
      <div className={styles.trendingquiznamecontainer}>
        <div className={styles.trendingquizname}>Quiz {index}</div>
        <div className={styles.trendingseen}>{seen}</div>
      </div>
      <div className={styles.trendingcreation}>Created on : {createdTime}</div>
    </div>
  );
};

export default Quizs;

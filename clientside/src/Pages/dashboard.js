import TrendingQuizzes from "../components/TrendingQuizzes";
import Sidebar from "../components/sidebar";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.maincontainer}>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.maincard}>
          <div className={styles.totalquiz}>
            <div className={styles.quizdatanumber}>0</div>
            Quizzes Created
          </div>
          <div className={styles.totalquestions}>
            <div className={styles.quizdatanumber}>0</div>
            Questions Created
          </div>
          <div className={styles.totalimpressions}>
            <div className={styles.quizdatanumber}>0</div>
            Impressions
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "left" }}>Trending Quizs</h2>
          {/* <div style={{ display: "contents" }}>
            <p c
            lassName={styles.p}>
              You haven't created any Quiz, Click on Create Quiz to create your
              first Quiz
            </p>
          </div> */}
          <div classname={styles.trendingquizzescontainer}>
            <TrendingQuizzes
              index={"1"}
              createdTime={"Jan 31, 2024"}
              seen={"4"}
            />
            <TrendingQuizzes
              index={"1"}
              createdTime={"Jan 31, 2024"}
              seen={"4"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Link, useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const analyticsHandler = () => {
    navigate("/analytics");
  };

  const dashboardHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          QUIZZIE
        </Link>
      </div>
      <div className={styles.buttoncontroller}>
        <button className={styles.buttons} onClick={dashboardHandler}>
          Dashboard
        </button>
        <button className={styles.buttons} onClick={analyticsHandler}>
          Analytics
        </button>
        <button className={styles.buttons}>Create Quiz</button>
      </div>
      <hr className={styles.hr}></hr>
      <div>
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;

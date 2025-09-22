import styles from "./analytics.module.css";
import Table from "../components/Table";
import Sidebar from "../components/sidebar";

const Analytics = () => {
  return (
    <div className={styles.analyticsmaincontainer}>
      <Sidebar />
      <div className={styles.analyticsubcontainer}>
        <h1 className={styles.analyticsheading}>Quiz Analytics</h1>
        <Table />
      </div>
    </div>
  );
};

export default Analytics;

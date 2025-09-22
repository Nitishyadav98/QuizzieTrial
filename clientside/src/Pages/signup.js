import { useNavigate } from "react-router";
import styles from "./signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <div className={styles.registermaincontainer}>
      <div className={styles.registersubcontainer}>
        <div className={styles.registerlogo}>QUIZZIE</div>
        <div className={styles.registerswitchmode}>
          <button className={styles.registersignupbutton}>SIGN UP</button>
          <button className={styles.registerloginbutton} onClick={loginHandler}>
            LOGIN
          </button>
        </div>
        <div className={styles.registerformcontainer}>
          <form className={styles.formcontainer}>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Name</label>
              <input className={styles.forminput}></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Email</label>
              <input className={styles.forminput}></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Password</label>
              <input className={styles.forminput}></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Confirm Password</label>
              <input className={styles.forminput}></input>
            </div>
            <button className={styles.registersubmitbutton}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

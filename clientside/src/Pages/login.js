import { useNavigate } from "react-router";
import styles from "./signup.module.css";

const Login = () => {
  const navigate = useNavigate();
  const signupHandler = () => {
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.registermaincontainer}>
      <div className={styles.registersubcontainer}>
        <div className={styles.registerlogo}>QUIZZIE</div>
        <div className={styles.registerswitchmode}>
          <button
            className={styles.registersignupbutton}
            onClick={signupHandler}
          >
            SIGN UP
          </button>
          <button className={styles.registerloginbutton}>LOGIN</button>
        </div>
        <div className={styles.registerformcontainer}>
          <form className={styles.formcontainer}>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Email</label>
              <input className={styles.forminput}></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Password</label>
              <input className={styles.forminput}></input>
            </div>
            <button
              className={styles.registersubmitbutton}
              onClick={loginHandler}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

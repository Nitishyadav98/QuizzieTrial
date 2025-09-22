import { useNavigate } from "react-router";
import styles from "./signup.module.css";

const Login = () => {
  const navigate = useNavigate();
  const signupHandler = () => {
    navigate("/");
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err.message);
      alert("Invalid credentials, try again");
    }
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

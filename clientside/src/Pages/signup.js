import { useNavigate } from "react-router";
import styles from "./signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginHandler = () => {
    navigate("/login");
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords does not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "Post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert("signup successful, please login");
        navigate("/login");
      }
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
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
          <form className={styles.formcontainer} onSubmit={signUpHandler}>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Name</label>
              <input
                className={styles.forminput}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Email</label>
              <input
                className={styles.forminput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Password</label>
              <input
                className={styles.forminput}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
            <div className={styles.formattribute}>
              <label className={styles.formlabel}>Confirm Password</label>
              <input
                className={styles.forminput}
                type="password"
                value={confirmPasswordassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></input>
            </div>
            <button type="submit" className={styles.registersubmitbutton}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

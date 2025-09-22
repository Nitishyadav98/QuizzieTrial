import "./App.css";
import Dashboard from "./Pages/dashboard";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import { Route, Routes } from "react-router";
import Analytics from "./Pages/analytics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import DashBoard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import DashBoard from "./pages/dashboard";
import GlobalContext from "./context/time-range";

const App = () => {
  return (
    <GlobalContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </GlobalContext>
  );
};

export default App;

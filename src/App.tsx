import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/login";
import DashBoard from "./pages/dashboard";
import GlobalContext from "./context/time-range";
import Docs from "./pages/Docs";

const App = () => {
  const goTo =
    (url: string) =>
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      location.href = url;
    };

  return (
    <GlobalContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login goTo={goTo} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/docs" element={<Docs goTo={goTo} />} />
        </Routes>
      </Router>
    </GlobalContext>
  );
};

export default App;

import React from "react";
import logo from "../assets/Flair_Airlines_logo.svg";
import { GoSearch } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Guard } from "../Guard";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [search, setSearch] = React.useState("");

  const navigate = useNavigate();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLogout = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigate("/");
  };

  return (
    <div className="layout-container">
      <div className="top-pane">
        <img src={logo} alt="flair airlines logo" />
        <div className="search">
          <input
            className="search-input"
            name="search"
            id="search"
            value={search}
            onChange={handleSearchInputChange}
            type="text"
            autoComplete="off"
            placeholder="Search by Airport "
          />
          <GoSearch className="search-icon" />
        </div>
        <div onClick={handleLogout} className="logout-container">
          <AiOutlineLogout className="logout-icon" />
          <span>Logout</span>
        </div>
      </div>
      <div className="left-pane-wrapper">
        <div className="left-pane"></div>
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default Guard(Layout);

import React from "react";
import logo from "../assets/Flair_Airlines_logo.svg";
import { GoSearch } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Guard } from "../Guard";
import Button from "./Button";
import { GoArrowDown } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { ITimeRangeContext, useTimeRange } from "../context/time-range";
import SideBar from "./SideBar";

const Layout: React.FC<{
  children: React.ReactNode;
  search: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ children, handleSearchInputChange, search }) => {
  const [open, setOpen] = React.useState(false);

  const [begin, end, , setTime] = useTimeRange();

  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    navigate("/");
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTime((prevState: ITimeRangeContext) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const findByTimeRange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (begin && end)
      setTime((prevState: ITimeRangeContext) => ({
        ...prevState,
        loading: !prevState.loading,
      }));
  };

  const toggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    setOpen((prevState) => !prevState);
  };

  const handleDocumentCloseMenu = (e: Event) => {
    if (!(e.target as HTMLDivElement).classList.contains("sidebar ")) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleDocumentCloseMenu);

    return () => {
      document.removeEventListener("click", handleDocumentCloseMenu);
    };
  }, []);

  return (
    <div className="layout-container">
      <SideBar
        handleLogout={handleLogout}
        toggleMenu={toggleMenu}
        open={open}
      />
      <div className="top-pane">
        <AiOutlineMenu onClick={toggleMenu} className={`hamburger-icon`} />
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
        <div className="left-pane">
          <span className="time-selector-label">Enter time range</span>
          <form>
            <input
              className="time-input"
              value={begin}
              name="begin"
              required
              onChange={handleTimeChange}
              type="text"
              placeholder="8:32"
            />
            <GoArrowDown className="arrow-down" />
            <input
              className="time-input"
              value={end}
              name="end"
              required
              onChange={handleTimeChange}
              type="text"
              placeholder="10:32"
            />
            <Button text="Find" handler={findByTimeRange} />
            <p>
              <i>time difference cannot exceed 2hrs</i>
            </p>
          </form>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default Guard(Layout);

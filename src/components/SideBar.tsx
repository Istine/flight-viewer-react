import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

const SideBar: React.FC<{
  open: boolean;
  handleLogout: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
  toggleMenu: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}> = ({ toggleMenu, open, handleLogout }) => {
  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const shadow = document.querySelector(".sidebar-shadow") as HTMLElement;
    if (open) {
      let opacity = 0.1;
      shadow.style.display = "block";
      interval = setInterval(() => {
        if (opacity >= 0.8) {
          clearInterval(interval);
        }
        shadow.style.opacity = String(opacity);
        shadow.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        opacity += opacity * 0.1;
      }, 10);
    } else if (!open) {
      let opacity = 0.8;
      interval = setInterval(() => {
        if (opacity <= 0.1) {
          shadow.style.display = "none";
          clearInterval(interval);
        }
        shadow.style.opacity = String(opacity);
        shadow.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        opacity -= opacity * 0.3;
      }, 50);
    }
  }, [open]);

  return (
    <>
      <div className="sidebar-shadow"></div>
      <div className={`sidebar ${open && "show-menu"}`}>
        <AiOutlineClose onClick={toggleMenu} className="close-icon" />
        <ul>
          <li onClick={handleLogout}>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;

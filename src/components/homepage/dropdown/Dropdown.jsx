import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={dropdown ? "others-submenu clicked" : "others-submenu"}
      onClick={() => setDropdown(!dropdown)}
    >
      <li>
        <Link
          to="/polls"
          className="sub-menu"
          onClick={() => setDropdown(false)}
        >
          Polls
        </Link>
      </li>
      <li>
        <Link to="/" className="sub-menu" onClick={() => setDropdown(false)}>
          Quiz
        </Link>
      </li>
      <li>
        <Link to="/" className="sub-menu" onClick={() => setDropdown(false)}>
          FPL Updates
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;

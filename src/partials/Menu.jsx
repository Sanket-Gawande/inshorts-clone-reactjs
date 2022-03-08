import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/menu.css";

const Menu = (props) => {
  const navs = [
    { to: "all", text: "All" },
    { to: "india", text: "India" },
    { to: "business", text: "Business" },
    { to: "sport", text: "Sport" },
    { to: "politics", text: "Politics" },
    { to: "international", text: "International" },
    { to: "science", text: "Science" },
    { to: "startup", text: "Startup" },
    { to: "technology", text: "Technology" },
    { to: "automobile", text: "Automobile" },
    { to: "hatke", text: "Hatke" },
  ];
  return (
    <div className={`menu-container ${props.class}`}>
      <div className="lang">
        <a href="/all" className="en active">
          English
        </a>
        <a href="/all" className="hi" disabled>
          हिन्दी
        </a>
      </div>
      <p>Categories</p>
      <ul className="topics-list">
        {navs.map((obj) => {
          return (
            <li key={obj.to} className="active">
              <NavLink onClick={props.menuToggle} to={obj.to}>
                {obj.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;

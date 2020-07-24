import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const [menuactive, setMenuactive] = useState(false)

  const { isAuthenticated, logout } = authContext;
  const links = [
    {
      name: "Home",
      path: "/Home",
    },
    {
      name: "Politics",
      path: "/Politics",
    },
    {
      name: "Sport",
      path: "./Sports",
    },
    {
      name: "Entertainment",
      path: "./Entertainment",
    },
    {
      name: "Business",
      path: "./Business",
    },
  ];
  return (
    <nav className="navigation">
      <span>News Project</span>
     {isAuthenticated &&
      <div className={`menu-container ${menuactive && 'active'} `}>
        <ul className={`menu-contain`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name} </Link>
            </li>
          ))}
        </ul>
      </div>}
      {isAuthenticated &&   <button
        className="logout button"
        onClick={logout}
        style={{ marginRight: "30px", alignSelf: "center" }}
      >
        LogOut
      </button>}
     
    </nav>
  );
};

export default Navigation;

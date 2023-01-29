import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div className="navbar">
      <nav>
        <a href="/">
          <img
            src={logo}
            className="img-class"
            alt="Logo"
            width="30"
            height="30"
          />
        </a>{" "}
        <div className="nav-links">
          <strong>
            <a href="/"> home </a>
          </strong>
          <strong>
            <a href="/about"> about </a>
          </strong>
          {isAuthenticated && <button onClick={() => logout()}>log out</button>}
        </div>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;

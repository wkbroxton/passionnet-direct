import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://i.imgur.com/5IwVdWN.png?1"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://i.imgur.com/lsSnaFZ.png"
        alt="Netflix Logo"
      />
      <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </div>
  );
}

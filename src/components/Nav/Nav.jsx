import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
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
    </div>
  );
}

export default Nav;

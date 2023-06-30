import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for v6
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); // Correct hook for navigation in v6

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          //src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          src="/bunnuflix.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")} // Use navigate instead of history.push
          className="nav_avatar"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-400-x-400-88wkdmjrorckekha.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;

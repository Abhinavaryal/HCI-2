import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogIn from "../components/Credentials/LogIn";
import SignUp from "../components/Credentials/SignUp";

const OrganizerInScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const organizer = localStorage.getItem("Email");
    const role = localStorage.getItem("role");

    if (role === "ORGANIZER" && organizer) {
      navigate("/organizer");
    }
  }, []);

  const changesColor = (e) => {
    e.target.style.color = "#efa506";
    e.target.style.transition = "0.5s";
  };
  const defaultColor = (e) => {
    e.target.style.color = "#fff";
  };
  return (
    <div
      // className="lgx-footer-black"
      style={{
        padding: 20,
      }}
    >
      <Link id="myModalLabel" className="icon" to={"/organizerattendee"}>
        <i
          className="fa fa-arrow-left "
          aria-hidden="true"
          style={{ color: "white" }}
          onMouseEnter={changesColor}
          onMouseLeave={defaultColor}
        ></i>
      </Link>
      <div
        style={{
          margin: "auto",
          width: "fit-content",
          display: "flex",
          gap: 50,
        }}
      >
        <LogIn api={"organizerAPI/logIn"} />
        <SignUp api={"organizerAPI/signUp"} />
      </div>
    </div>
  );
};

export default OrganizerInScreen;

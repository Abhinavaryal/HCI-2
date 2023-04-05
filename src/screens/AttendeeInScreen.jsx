import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogIn from "../components/Credentials/LogIn";
import SignUp from "../components/Credentials/SignUp";


const LoginInScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const attendee = localStorage.getItem("Email");
    const role = localStorage.getItem("role");

    if (role === "ATTENDEE" && attendee) {
      navigate("/attendee");
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
      //   className="lgx-footer-black"
      style={{
        // minHeight: 713,
        padding: 15,
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          width: "fit-content",
          gap: 50,
        }}
      >
        <LogIn api={"attendeeAPI/logIn"} />
        <SignUp api={"attendeeAPI/signUp"} />
      </div>
    </div>
  );
};

export default LoginInScreen;

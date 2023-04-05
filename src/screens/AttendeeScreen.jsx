import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainBanner from "../components/Attendee Screen/MainBanner";

import Header from "../components/Redundant Components/Header";

const AttendeeScreen = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ATTENDEE") navigate("/");
  }, []);
  return (
    <>
      <Header heading={"ATTENDEE"} navigation={"/"} profile={role} />
      <MainBanner />
    </>
  );
};

export default AttendeeScreen;

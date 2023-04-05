import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Redundant Components/Header";
import MainBanner from "../components/OrganizerScreen/MainBanner";

const OrganizerScreen = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ORGANIZER") navigate("/");
  }, []);

  return (
    <>
      <Header heading={"ORGANIZER"} navigation={"/"} profile={role} />
      <MainBanner />
    </>
  );
};

export default OrganizerScreen;

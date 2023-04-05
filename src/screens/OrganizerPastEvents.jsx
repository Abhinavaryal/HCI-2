import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainBanner from "../components/Organizer Past Events/MainBanner";
import Header from "../components/Redundant Components/Header";

const PastEvents = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ORGANIZER") navigate("/");
  }, []);
  return (
    <>
      <Header heading={"PAST EVENTS"} />
      <MainBanner />
    </>
  );
};

export default PastEvents;

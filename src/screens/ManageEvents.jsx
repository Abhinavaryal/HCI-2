import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainBanner from "../components/ManageEvents/MainBanner";
import Header from "../components/Redundant Components/Header";
import OpenAI from "../components/Redundant Components/OpenAI";
const ManageEvents = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (role !== "ORGANIZER") navigate("/");
  // }, []);
  return (
    <>
      <Header/>
      {/* <MainBanner /> */}
      <OpenAI/>

    </>
  );
};

export default ManageEvents;

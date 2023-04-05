import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainBanner from "../components/Attendee Profile/MainBanner";

import Header from "../components/Redundant Components/Profiles/Header";
import OpenAI from "../components/Redundant Components/OpenAI";
const AttendeeProfileScreen = () => {
  const name = localStorage.getItem("Name");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ATTENDEE") navigate("/");
  }, []);

  return (
    <section>
      <Header name={name} link={"/attendee"} />
      <MainBanner />
      <OpenAI />
    </section>
  );
};

export default AttendeeProfileScreen;

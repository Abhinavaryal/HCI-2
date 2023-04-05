import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Redundant Components/Profiles/Header";
import MainBanner from "../components/OrganizerProfile/MainBanner";

const OrganizerProfileScreen = () => {
  const name = localStorage.getItem("Name");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  return (
    <section>
      <Header name={name} link={"/organizer"} />
      <MainBanner />
    </section>
  );
};

export default OrganizerProfileScreen;

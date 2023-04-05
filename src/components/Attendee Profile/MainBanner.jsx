import React from "react";
import Box from "@mui/material/Box";

import Details from "../Redundant Components/Profiles/Details";
import Interests from "../Redundant Components/Profiles/Interests";
import Subscriptions from "../Redundant Components/Profiles/Subscriptions";

const MainBanner = () => {
  return (
    <div className="lgx-footer-black" style={{ padding: 25, minHeight: 638 }}>
      <Box
        style={{
          //   minHeight: "543px",
          display: "flex",
          //   flexWrap: "wrap",
          flexDirection: "column",
          "& > :not(style)": {
            m: 1,
            width: 228,
            height: 228,
          },
        }}
      >
        <Details
          getApi={"attendeeAPI/getAttendeeDetails"}
          putApi={"attendeeAPI/updateAttendeeDetails"}
        />
        <Interests
          getApi={"attendeeAPI/getAttendeeDetails"}
          addApi={"attendeeAPI/addInterests"}
        />
        <Subscriptions />
      </Box>
    </div>
  );
};

export default MainBanner;

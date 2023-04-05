import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 75,
        height: "fit-content",
        paddingTop: 45,
      }}
    >
      <Link style={{ color: "#fff" }} to={"/upcomingevents"}>
        <button
          // variant="contained"
          // onClick={logIn}
          // size="large"
          class="lgx-btn-yellow customized-btn"
          style={{ padding: 15, height: 60, width: 260 }}
        >
          UPCOMING EVENTS
        </button>
      </Link>

      <Link tyle={{ color: "#fff" }} to={"/manageevents"}>
        <button
          class="lgx-btn-yellow customized-btn"
          style={{ padding: 15, height: 60, width: 260 }}
        >
          MANAGE EVENTS
        </button>
      </Link>

      <Link tyle={{ color: "#fff" }} to={"/pastevents"}>
        <button
          class="lgx-btn-yellow customized-btn"
          style={{ padding: 15, height: 60, width: 260 }}
        >
          PAST EVENTS
        </button>
      </Link>
    </div>
  );
};

export default Events;

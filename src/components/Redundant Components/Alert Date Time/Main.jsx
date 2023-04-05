import React from "react";
import Alert from "./Alert";
import EventDate from "./EventDate";
import EventTime from "./EventTime";

const Main = () => {
  return (
    <div style={{ display: "flex", gap: 100 }}>
      <Alert />
      <EventTime />
      <EventDate />
    </div>
  );
};

export default Main;

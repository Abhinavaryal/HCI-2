import React from "react";

import Calender from "./Calender";
import Events from "./Events";
import ToDoCheckList from "./ToDoCheckList";

const MainBanner = () => {
  return (
    <div
      // className="lgx-footer-black"
      style={{
        display: "flex",
        gap: "300px",
        padding: "50px",
        justifyContent: "center",
        // minHeight: window.innerHeight,
        // minWidth: window.innerWidth,
      }}
    >
      <Calender />

      <Events />

      <ToDoCheckList />
    </div>
  );
};

export default MainBanner;

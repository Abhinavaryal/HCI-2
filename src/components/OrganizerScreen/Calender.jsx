import React from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

const Calender = () => {
  const values = [
    new Date("4/6/2023"),
    new Date("4/25/2023"),
    new Date("4/11/2023"),
    new Date("4/20/2023"),
  ];
  return (
    <div style={{ height: "fit-content" }}>
      <h2 style={{ textAlign: "center", color: "white", marginBottom: 10 }}>
        MY SCHEDULE
      </h2>
      <CalendarComponent
        id="calendar"
        isMultiSelection={true}
        values={values}
      />
    </div>
  );
};

export default Calender;

import React from "react";
import Paper from "@mui/material/Paper";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

const EventCalender = ({ title, values }) => {
  return (
    <Paper
      elevation={3}
      style={{
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // margin: "auto",
        backgroundColor: "#2a3748",
        textAlign: "center",
        padding: 10,
        width: 420,
      }}
    >
      <CalendarComponent
        id="calendar"
        isMultiSelection={true}
        values={values}
        style={{ maxWidth: "fit-content", height: 383 }}
      />
      <h3 style={{ marginTop: 8, marginBottom: 0, color: "#efa506" }}>
        {title}
      </h3>
    </Paper>
  );
};

export default EventCalender;

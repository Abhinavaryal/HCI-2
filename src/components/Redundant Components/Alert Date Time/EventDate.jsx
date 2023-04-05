import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "../../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

const EventDate = () => {
  const [eventDate, setDate] = useState("");
  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: "#2a3748",
        textAlign: "center",
        padding: 10,
        width: 420,
        height: "fit-content",
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <h5 style={{ color: "white" }}>{eventDate.toString().slice(0, 15)}</h5>
        <CalendarComponent
          id="calendar"
          onChange={(event) => {
            console.log(event.target.value);
            setDate(event.target.value);
          }}
          // values={values}
          style={{ maxWidth: "fit-content", height: 383 }}
        />
      </div>

      <h3 style={{ marginTop: 10, marginBottom: 0, color: "#efa506" }}>
        EVENT DATE
      </h3>
    </Paper>
  );
};

export default EventDate;

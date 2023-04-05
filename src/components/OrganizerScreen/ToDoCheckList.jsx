import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ToDoCheckList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        //   flexWrap: "wrap",
        flexDirection: "column",
        "& > :not(style)": {
          m: 1,
          width: 228,
          height: 228,
          minHeight: "fit-content",
        },
      }}
    >
      <Paper
        elevation={1}
        style={{ overflow: "auto", padding: 5, backgroundColor: "#2a3748" }}
        className="toDoCheckList"
      >
        <h5
          style={{
            textAlign: "center",
            marginBottom: 15,
            color: "#efa506",
          }}
        >
          To-Do List
        </h5>
        <ul style={{ paddingLeft: 25, color: "#efa506" }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </Paper>

      <Paper
        elevation={1}
        style={{ overflow: "auto", padding: 5, backgroundColor: "#2a3748" }}
        className="toDoCheckList"
      >
        <h5 style={{ textAlign: "center", marginBottom: 15, color: "#efa506" }}>
          Event Check List
        </h5>
        <ul style={{ paddingLeft: 25, color: "#efa506" }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </Paper>
    </Box>
  );
};

export default ToDoCheckList;

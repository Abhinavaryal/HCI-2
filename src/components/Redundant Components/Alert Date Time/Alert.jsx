import React from "react";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

const Alert = ({ alerts }) => {
  console.log(alerts);
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
        height: "fit-content",
      }}
    >
      {alerts ? (
        <div>
          <h5
            style={{
              textAlign: "center",
              marginBottom: 10,
              color: "#efa506",
            }}
          >
            BEFORE EVENT
          </h5>
          <ul style={{ paddingLeft: 25, color: "#efa506" }}>
            {Object.keys(alerts).forEach((ele) => {
              if (ele === "Before Event") {
                alerts[ele].forEach((alert) => {
                  <li>{alert}</li>;
                });
              }
            })}
          </ul>
          <Divider />

          <h5
            style={{
              textAlign: "center",
              marginBottom: 10,
              color: "#efa506",
            }}
          >
            DURING THE EVENT
          </h5>
          <ul style={{ paddingLeft: 25, color: "#efa506" }}>
            {Object.keys(alerts).forEach((ele) => {
              ele === "During the Event" && (
                <>
                  {alerts[ele].map((alert) => {
                    return <li>{alert}</li>;
                  })}
                </>
              );
            })}
          </ul>
        </div>
      ) : (
        // <>
        //   {Object.keys(alerts) === "Before Event" ? (
        //     <>
        //       <h5
        //         style={{
        //           textAlign: "center",
        //           marginBottom: 10,
        //           color: "#efa506",
        //         }}
        //       >
        //         BEFORE EVENT
        //       </h5>

        //       <ul style={{ paddingLeft: 25, color: "#efa506" }}>
        //         {alerts["Before Event"].map((ele) => {
        //           return <li>{ele}</li>;
        //         })}
        //       </ul>
        //     </>
        //   ) : (
        //     <>
        //       <h5
        //         style={{
        //           textAlign: "center",
        //           marginBottom: 10,
        //           color: "#efa506",
        //         }}
        //       >
        //         DURING THE EVENT
        //       </h5>

        //       <ul style={{ paddingLeft: 25, color: "#efa506" }}>
        //         {alerts["During the Event"].map((ele) => {
        //           return <li>{ele}</li>;
        //         })}
        //       </ul>
        //     </>
        //   )}
        // </>
        <>
          <TextField
            id="outlined-basic"
            label="TYPE HERE..."
            variant="standard"
            size="large"
            fullWidth
            style={{ marginBottom: 15, marginRight: 15 }}
            InputLabelProps={{
              style: {
                color: "#efa506",
                fontFamily: "Poppins, sans-serif",
                fontSize: 14,
                lineHeight: 1,
              },
            }}
            inputProps={{
              style: {
                color: "white",
                fontFamily: "Poppins, sans-serif",
              },
            }}
            // onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className="lgx-btn-yellow customized-btn"
            style={{
              padding: "1.5rem 6.5rem",
            }}
          >
            SEND ALERT
          </button>
        </>
      )}

      <h3 style={{ marginTop: 10, marginBottom: 0, color: "#efa506" }}>
        ALERT DASHBOARD
      </h3>
    </Paper>
  );
};

export default Alert;

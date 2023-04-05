import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LogIn = ({ api }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const logIn = async () => {
    // const data = await axios({
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   url: `https://hci-project-backend-group24.vercel.app/${api}`,
    //   data: { email, password },
    //   method: "post",
    // });
    const data = await axios.post(api, { email, password });

    if (typeof data.data !== "object") {
      toast(data.data, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    } else {
      localStorage.setItem("Email", data.data.email);
      localStorage.setItem("Name", data.data.name);
      localStorage.setItem("role", data.data.role);

      if (data.data.role === "ORGANIZER") navigate("/organizer");
      if (data.data.role === "ATTENDEE") navigate("/attendee");
    }
  };

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     "& > :not(style)": {
    //       m: 1,
    //       // width: 385,
    //       // height: 237,
    //     },
    //   }}
    // >
    // </Box>
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
        display: "flex",
        flexDirection: "column",
        padding: 10,
        gap: 10,
        width: "fit-content",
        margin: "auto",
      }}
    >
      <h3
        // variant="h4"
        color={"#efa506"}
        style={{ width: "fit-content", margin: "auto" }}
      >
        LOGIN
      </h3>

      <TextField
        id="outlined-basic"
        label="EMAIL ID"
        variant="outlined"
        style={{ width: "fit-content", margin: "auto" }}
        // size="large"
        InputLabelProps={{
          style: {
            color: "#efa506",
            fontFamily: "Poppins, sans-serif",
            fontSize: 14,
          },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fonSize: 14,
          },
        }}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="PASSWORD"
        variant="outlined"
        style={{ width: "fit-content", margin: "auto" }}
        type={"password"}
        size="large"
        InputLabelProps={{
          style: {
            color: "#efa506",
            fontFamily: "Poppins, sans-serif",
            fonSize: 14,
          },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fonSize: 14,
          },
        }}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        // variant="contained"
        onClick={logIn}
        // size="large"
        className="lgx-btn-yellow customized-btn"
        style={{ padding: 15 }}
      >
        Log In
      </button>
    </Paper>
  );
};

export default LogIn;

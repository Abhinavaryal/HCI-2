import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignUp = ({ api }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = async () => {
    if (password !== rePassword) {
      toast(`Passwords do not match. Kindly enter same passwords.`, {
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
      const data = await axios.post(api, {
        name,
        email,
        password,
      });
      if (data.data) {
        localStorage.setItem("Email", data.data.email);
        localStorage.setItem("role", data.data.role);

        if (data.data.role === "ORGANIZER") navigate("/organizer");
        if (data.data.role === "ATTENDEE") navigate("/attendee");
      }
    }
  };

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
        // style={{ margin: "25px 0px 25px 0px" }}
      >
        SIGNUP
      </h3>

      <TextField
        id="outlined-basic"
        label="NAME"
        variant="outlined"
        // style={{ marginBottom: 15, marginRight: 15 }}
        InputLabelProps={{
          style: {
            color: "#efa506",
            fontFamily: "Poppins, sans-serif",
            fonSize: 16,
          },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fonSize: 16,
          },
        }}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="EMAIL ID"
        variant="outlined"
        // style={{ marginBottom: 15 }}
        InputLabelProps={{
          style: {
            color: "#efa506",
            fontFamily: "Poppins, sans-serif",
            fonSize: 16,
          },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fonSize: 16,
          },
        }}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="PASSWORD"
        variant="outlined"
        // style={{ marginRight: 15 }}
        type={"password"}
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

      <TextField
        id="outlined-basic"
        label="RE-TYPE PASSWORD"
        variant="outlined"
        // style={{ marginBottom: 15 }}
        type={"password"}
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
        onChange={(event) => setrePassword(event.target.value)}
      />

      <button
        // variant="contained"
        onClick={signUp}
        size="large"
        className="lgx-btn-yellow customized-btn"
        style={{ padding: 15 }}
      >
        Sign Up
      </button>
      {/* <ToastContainer /> */}
    </Paper>
  );
};

export default SignUp;

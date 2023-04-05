import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = ({ getApi, putApi }) => {
  const email = localStorage.getItem("Email");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [insta, setInsta] = useState("");
  const [location, setLocation] = useState("");

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const changesColor = (e) => {
    e.target.style.color = "#efa506";
    e.target.style.transition = "0.5s";
    e.target.style.cursor = "pointer";
    e.target.style.border = "#efa506";
  };
  const defaultColor = (e) => {
    e.target.style.color = "#fff";
  };

  useEffect(() => {
    axios
      .put(`https://hci-project-backend-group24.vercel.app/${getApi}`, {
        email,
      })
      .then(({ data }) => {
        console.log(data.data);
        if (data.data.name) {
          setName(data.data.name);
        }
        if (data.data.dob) {
          setDOB(data.data.dob);
        }
        if (data.data.location) {
          setLocation(data.data.location);
        }
        if (data.data.instagram) {
          setInsta(data.data.instagram);
        }
        if (data.data.password) {
          setPassword(data.data.password);
        }
      });
  }, [email]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="lgx-footer-black"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        padding: 1,
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        value={name}
        variant="outlined"
        style={{ margin: "8px 0px" }}
        InputLabelProps={{
          style: { color: "#efa506", fontFamily: "Poppins, sans-serif" },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        onChange={(event) => setName(event.target.value)}
      />
      <Divider />

      <TextField
        id="outlined-basic"
        label="Email"
        value={email}
        variant="outlined"
        style={{ margin: "8px 0px" }}
        InputLabelProps={{
          style: { color: "#efa506", fontFamily: "Poppins, sans-serif" },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        // onChange={(event) => setName(event.target.value)}
        // disabled
      />
      <Divider />

      <TextField
        id="outlined-basic"
        label="DoB"
        value={dob}
        variant="outlined"
        style={{ margin: "8px 0px" }}
        InputLabelProps={{
          style: { color: "#efa506", fontFamily: "Poppins, sans-serif" },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        onChange={(event) => setDOB(event.target.value)}
      />
      <Divider />

      <TextField
        id="outlined-basic"
        label="Location"
        value={location}
        variant="outlined"
        style={{ margin: "8px 0px" }}
        InputLabelProps={{
          style: { color: "#efa506", fontFamily: "Poppins, sans-serif" },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        onChange={(event) => setLocation(event.target.value)}
      />
      <Divider />

      <TextField
        id="outlined-basic"
        label="Instagram"
        value={insta}
        variant="outlined"
        style={{ margin: "8px 0px" }}
        InputLabelProps={{
          style: { color: "#efa506", fontFamily: "Poppins, sans-serif" },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        onChange={(event) => setInsta(event.target.value)}
      />
      <Divider />

      <TextField
        id="outlined-basic"
        label="Password"
        value={password}
        variant="outlined"
        style={{ margin: "8px 0px" }}
        InputLabelProps={{
          style: { color: "#efa506", fontFamily: "Poppins, sans-serif" },
        }}
        inputProps={{
          style: {
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        // variant="contained"
        onClick={updateChanges}
        // size="large"
        class="lgx-btn-yellow customized-btn"
        // style={{ padding: 10, marginTop: 8, position: "absolute", right: 20 }}
      >
        Update Changes
      </button>
    </Box>
  );

  const updateChanges = async () => {
    const data = await axios.put(
      `https://hci-project-backend-group24.vercel.app/${putApi}`,
      {
        name,
        dob,
        location,
        insta,
        password,
        email,
      }
    );
    if (data.data === "Data changed Succesfully!") {
      toast(data.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "success",
      });
    } else {
      toast(data.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    }
  };

  return (
    <>
      <Paper
        elevation={1}
        style={{ padding: 5, backgroundColor: "#2a3748", marginBottom: 25 }}
        //   className="toDoCheckList"
      >
        <i
          className="fa fa-pencil"
          aria-hidden="true"
          style={{ color: "white", position: "absolute", right: 35, top: 120 }}
          onMouseEnter={changesColor}
          onMouseLeave={defaultColor}
          onClick={toggleDrawer("top", true)}
        ></i>
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
        <h3
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: "#efa506",
            marginTop: 0,
          }}
        >
          YOUR DETAILS
        </h3>
        <ul style={{ paddingLeft: 25, color: "#efa506" }}>
          <li>NAME: {name}</li>
          <li>EMAIL: {email}</li>
          <li>DoB:{dob}</li>
          <li>LOCATION: {location}</li>
          <li>INSTAGRAM: {insta}</li>
          <li>PASSWORD: {password}</li>
        </ul>
      </Paper>
      <ToastContainer />
    </>
  );
};

export default Details;

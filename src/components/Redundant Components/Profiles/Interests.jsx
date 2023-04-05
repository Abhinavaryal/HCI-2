import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#263146",
  // border: "2px solid #263146",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const Interests = ({ getApi, addApi }) => {
  const email = localStorage.getItem("Email");

  const [interests, setInterersts] = useState([]);
  const [interestsString, setIntererstsString] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .put(`https://hci-project-backend-group24.vercel.app/${getApi}`, {
        email,
      })
      .then(({ data }) => {
        // console.log(data.data);
        if (data.data.interests.length) {
          setInterersts(data.data.interests);
          // interests = data.data.interests;
        }
      });
  }, [email]);

  const changesColor = (e) => {
    e.target.style.color = "#efa506";
    e.target.style.transition = "0.5s";
    e.target.style.cursor = "pointer";
    e.target.style.border = "#efa506";
  };
  const defaultColor = (e) => {
    e.target.style.color = "#fff";
  };

  const handleAdd = async () => {
    // setInterersts([...interests, interestsString]);
    interests.push(interestsString);
    console.log(interests);
    const data = await axios.put(
      `https://hci-project-backend-group24.vercel.app/${addApi}`,
      {
        email,
        interests: interestsString,
      }
    );
    console.log(data.data);

    if (data.data === true) {
      toast("Skill added", {
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
      toast("Some error ocurred!", {
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
        style={{
          padding: "5px 5px 10px 5px",
          backgroundColor: "#2a3748",
          marginBottom: 25,
        }}
        //   className="toDoCheckList"
      >
        <i
          className="fa fa-pencil"
          aria-hidden="true"
          style={{ color: "white", position: "absolute", right: 35, top: 370 }}
          onMouseEnter={changesColor}
          onMouseLeave={defaultColor}
          onClick={handleOpen}
        ></i>

        <h3
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: "#efa506",
            marginTop: 0,
          }}
        >
          YOUR INTERESTS
        </h3>
        <ul style={{ paddingLeft: 25, color: "#efa506" }}>
          {interests.length ? (
            interests.map((ele) => {
              return <li>{ele}</li>;
            })
          ) : (
            <h4 style={{ fontSize: 20, color: "#efa506" }}>
              You do not have any interests yet. Please either click{" "}
              <u style={{ cursor: "pointer" }} onClick={handleOpen}>
                here
              </u>{" "}
              or at the pencil to add your interests!
            </h4>
          )}
        </ul>

        {/* <ul >
          <li>NAME: </li>
          <li>EMAIL: </li>
          <li>DoB:</li>
          <li>LOCATION: </li>
          <li>INSTAGRAM: </li>
          <li>PASSWORD: </li>
        </ul> */}
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Interest"
            variant="outlined"
            style={{ marginBottom: "15px" }}
            InputLabelProps={{
              style: {
                color: "#efa506",
                fontFamily: "Oswald, Sans-serif",
                fontSize: 14,
                top: "-3px",
              },
            }}
            inputProps={{
              style: {
                color: "white",
                fontFamily: "Oswald, Sans-serif",

                fontSize: 14,
              },
            }}
            onChange={(event) => {
              setIntererstsString(event.target.value);
            }}
          />
          <div style={{ color: "#efa506" }}>
            {interests.map((ele) => {
              return <>{ele}, </>;
            })}
          </div>

          <div>
            <button
              className="lgx-btn-yellow customized-btn"
              style={{ float: "right", padding: "5px 30px" }}
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </Box>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default Interests;

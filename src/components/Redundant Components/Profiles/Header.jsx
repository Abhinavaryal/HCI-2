import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ name, link }) => {
  const navigate = useNavigate();
  const changesColor = (e) => {
    e.target.style.color = "#efa506";
    e.target.style.transition = "0.5s";
  };
  const defaultColor = (e) => {
    e.target.style.color = "#fff";
  };

  const handleLogout = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <section
      className="lgx-banner lgx-banner-inner"
      style={{
        padding: 20,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          marginRight: "auto",
          padding: 0,
        }}
      >
        <Link id="myModalLabel" className="icon" to={link}>
          <i
            className="fa fa-arrow-left "
            aria-hidden="true"
            style={{ color: "white" }}
            onMouseEnter={changesColor}
            onMouseLeave={defaultColor}
          ></i>
        </Link>
      </div>

      <div
        style={{
          display: "inline-block",
          margin: "0px auto 0px 0px",
        }}
      >
        <h2 style={{ color: "white" }}>{name}</h2>
      </div>

      <div
        style={{
          display: "inline-block",
          // marginLeft: "auto",
          padding: 0,
        }}
      >
        {/* <Link id="myModalLabel" className="icon" to={"/organizercredentials"}> */}
        <LogoutIcon
          fontSize="large"
          sx={{ color: "white", cursor: "pointer" }}
          onMouseEnter={changesColor}
          onMouseLeave={defaultColor}
          onClick={handleLogout}
        />
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Header;

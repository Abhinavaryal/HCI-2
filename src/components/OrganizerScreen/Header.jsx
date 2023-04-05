import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const changesColor = (e) => {
    e.target.style.color = "#efa506";
    e.target.style.transition = "0.5s";
  };
  const defaultColor = (e) => {
    e.target.style.color = "#fff";
  };

  return (
    <section
      className="lgx-banner lgx-banner-inner"
      style={{
        padding: 15,
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
        <Link id="myModalLabel" className="icon" to={"/organizerattendee"}>
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
          margin: "0px auto",
          paddingLeft: 305,
        }}
      >
        <h2 style={{ color: "white" }}>ORGANIZER</h2>
      </div>

      <div
        class="lgx-nav-right navbar-right"
        style={{
          display: "inline-block",
          margin: "5px auto",
          padding: 10,
          position: "relative",
          right: "-125px",
          top: "-3px",
        }}
      >
        {/* <div class="lgx-cart-area"> */}
        {/* <a class="lgx-btn lgx-btn-red" href="#"> */}
        <Link to={"/profile"} style={{ color: "white" }}>
          <button className="lgx-btn-yellow customized-btn">
            VIEW PROFILE
          </button>
        </Link>
        {/* </a> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Header;

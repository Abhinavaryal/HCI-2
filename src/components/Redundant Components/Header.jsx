import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ heading, navigation, profile }) => {
  const changesColor = (e) => {
    e.target.style.color = "#efa506";
    e.target.style.transition = "0.5s";
  };
  const defaultColor = (e) => {
    e.target.style.color = "#fff";
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Eve2Go
        </a>

        <div className="" id="navbarText" style={{display:"flex", gap: "50px"}}> 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display:"inline-flex", gap: "50px"}}>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#EventList">
                EventList
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Organizer">
                ListYourEvent
              </a>
            </li>
          </ul>
          <a className="nav-link" href="#Login">
            Log-in
          </a>
        </div>
      </div>
    </nav>

    // <section
    //   className="lgx-banner lgx-banner-inner"
    //   style={{
    //     padding: 15,
    //     display: "flex",
    //     flexWrap: "wrap",
    //     justifyContent: "center",
    //     // minWidth: window.innerWidth - 17,
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "inline-block",
    //       marginRight: "auto",
    //       padding: 0,
    //     }}
    //   >
    //     {navigation ? (
    //       <Link id="myModalLabel" className="icon" to={navigation}>
    //         <i
    //           className="fa fa-arrow-left "
    //           aria-hidden="true"
    //           style={{ color: "white" }}
    //           onMouseEnter={changesColor}
    //           onMouseLeave={defaultColor}
    //         ></i>
    //       </Link>
    //     ) : (
    //       <Link id="myModalLabel" className="icon" to={"/organizer"}>
    //         <i
    //           className="fa fa-arrow-left "
    //           aria-hidden="true"
    //           style={{ color: "white" }}
    //           onMouseEnter={changesColor}
    //           onMouseLeave={defaultColor}
    //         ></i>
    //       </Link>
    //     )}
    //   </div>

    //   <div
    //     style={{
    //       display: "inline-block",
    //       margin: "0px auto",
    //       paddingLeft: 305,
    //     }}
    //   >
    //     <h2 style={{ color: "white" }}>{heading}</h2>
    //   </div>

    //   <div
    //     class="lgx-nav-right navbar-right"
    //     style={{
    //       display: "inline-block",
    //       margin: "5px auto",
    //       padding: 10,
    //       position: "relative",
    //       right: "-125px",
    //       top: "-3px",
    //     }}
    //   >
    //     {profile === "ORGANIZER" && (
    //       <Link to={"/organizerprofile"} style={{ color: "white" }}>
    //         <button className="lgx-btn-yellow customized-btn">
    //           VIEW PROFILE
    //         </button>
    //       </Link>
    //     )}
    //     {profile === "ATTENDEE" && (
    //       <Link to={"/attendeeprofile"} style={{ color: "white" }}>
    //         <button className="lgx-btn-yellow customized-btn">
    //           VIEW PROFILE
    //         </button>
    //       </Link>
    //     )}
    //   </div>
    // </section>
  );
};

export default Header;

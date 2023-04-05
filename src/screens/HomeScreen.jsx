import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

const HomeScreen = () => {
  return (
    <section>
      <div className="lgx-banner lgx-banner14">
        <div className="lgx-banner-style">
          <div className="lgx-inner lgx-inner-fixed">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="lgx-banner-info">
                    <div className="lgx-countdown-area">
                      <div id="lgx-countdown" data-date="2023/3/24">
                        <Countdown
                          id="lgx-countdown"
                          date={"2023-05-24T14:24:00"}
                        />
                      </div>
                    </div>
                    <h3 className="subtitle">We Are Very Happy</h3>
                    <h2 className="title">
                      Conference{" "}
                      <span>
                        <b>2</b>
                        <b>0</b>
                        <b>2</b>
                        <b>3</b>
                      </span>
                    </h2>
                    <div className="action-area">
                      <div className="lgx-video-area">
                        <p className="video-area">
                          <Link
                            id="myModalLabel"
                            className="icon"
                            to={"/organizerattendee"}
                          >
                            <i
                              className="fa fa-arrow-right "
                              aria-hidden="true"
                            ></i>
                          </Link>{" "}
                          Welcome! Let's Start!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;

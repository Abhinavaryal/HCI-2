import React from "react";

const MainBanner = () => {
  return (
    <div
      style={{
        backgroundColor: "#2a3748",
        padding: 15,
        textAlign: "center",
        borderRadius: 30,
        width: "100%",
      }}
    >
      <h3>TRENDING EVENTS</h3>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3>UPCOMING EVENTS</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-6 mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6 mb-4">
            <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6 mb-4">
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6 mb-4">
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default MainBanner;

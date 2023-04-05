import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const AttendeeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      indicators={false}
      interval={2000}
      style={{ "& .carousel-inner": { height: 300 } }}
    >
      <Carousel.Item>
        <img
          style={{ borderRadius: "0 0 20px 20px", height: 300 }}
          //   className="d-block w-100"
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/306094134_610178967314589_729820728882172459_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZzWS1mGaV5sAX8i0NvX&_nc_ht=scontent-atl3-2.xx&oh=00_AfCob5jD4oReVpF_kcSdo8Na_6yH3HjiPqeFZJ1axkeO2Q&oe=64301E11"
          alt="First slide"
        />
        {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "0 0 20px 20px", height: 300 }}
          //   className="d-block w-100"
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/314933961_651615129837639_9200371472356334692_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VHvZbWGSo1AAX_GXUxY&_nc_ht=scontent-atl3-2.xx&oh=00_AfC3wmFEmSlLR0WTCqqKIgTcS7K5YhB5FnTrAXfV-Mv4iw&oe=64311CC1"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "0 0 20px 20px", height: 300 }}
          //   className="d-block w-100"
          src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/277459994_10166415946785602_7865776796505449310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MDkHRr_EBfEAX-8GI6s&_nc_ht=scontent-atl3-1.xx&oh=00_AfCKFo-0YsJ2qIwdxRA6ewnMLQiBuCtYOacSysEAzeNO7g&oe=642FB0A9"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default AttendeeCarousel;

import React from "react";

import Main from "../Redundant Components/Alert Date Time/Main";
import Chart from "../Redundant Components/Chart";
import EventCalender from "../Redundant Components/EventCalender";
import EngagementChart from "../Redundant Components/LineChart";

const lineData = [
  {
    name: "1h",
    website: 4000,
    instagram: 2400,
    amt: 2400,
  },
  {
    name: "2h",
    website: 3000,
    instagram: 1398,
    amt: 2210,
  },
  {
    name: "3h",
    website: 2000,
    instagram: 5600,
    amt: 2290,
  },
  {
    name: "4h",
    website: 2780,
    instagram: 3908,
    amt: 2000,
  },
  {
    name: "5h",
    website: 1890,
    instagram: 4800,
    amt: 2181,
  },
];

const pieData = {
  labels: ["Seats Available", "Registrains Done"],
  datasets: [
    {
      label: " # of Candidates",
      data: [75, 50],
      backgroundColor: ["red", "green"],
      borderColor: ["red", "green"],
      borderWidth: 1,
      color: "#fff",
    },
  ],
};

const MainBanner = () => {
  const values = [
    new Date("4/6/2023"),
    new Date("4/25/2023"),
    new Date("4/11/2023"),
    new Date("4/20/2023"),
  ];

  return (
    <div
      // className="lgx-footer-black"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 50,
        // gap: "360px",
        padding: "50px",
        // justifyContent: "center",
        // minHeight: window.innerHeight,
        // minWidth: window.innerWidth,
      }}
    >
      {/* <div style={{ display: "flex", flexDirection: "column", gap: 50 }}> */}
      <div style={{ display: "flex", gap: 100 }}>
        <Chart title={"SEAT AVAILABILITY"} data={pieData} />
        <EngagementChart
          title={"ENGAGEMENT"}
          data={lineData}
          dataKey1={"website"}
          dataKey2={"instagram"}
        />
        <EventCalender title={"SHARED CALENDER"} values={values} />
        {/* <Chart />
          <Maps />
          <Calender /> */}
      </div>{" "}
      {/* upper container */}
      <Main />
      {/* lower container */}
      {/* </div> */}
    </div>
  );
};

export default MainBanner;

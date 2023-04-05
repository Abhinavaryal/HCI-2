import React from "react";
import Paper from "@mui/material/Paper";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
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

const EngagementChart = () => {
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
        padding: 10,
        width: 420,
        height: "fit-content",
      }}
    >
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={390}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="website"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="instagram" stroke="#82ca9d" />
      </LineChart>
      {/* </ResponsiveContainer> */}
      <h3 style={{ marginTop: 10, marginBottom: 0, color: "#efa506" }}>
        ENGAGEMENT
      </h3>
    </Paper>
  );
};

export default EngagementChart;

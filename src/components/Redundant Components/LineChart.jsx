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

const EngagementChart = ({ title, data, dataKey1, dataKey2 }) => {
  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: "#2a3748",
        textAlign: "center",
        padding: 10,
        width: 420,
        height: "fit-content",
      }}
    >
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
          dataKey={dataKey1}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
      </LineChart>
      {/* </ResponsiveContainer> */}
      <h3 style={{ marginTop: 10, marginBottom: 0, color: "#efa506" }}>
        {title}
      </h3>
    </Paper>
  );
};

export default EngagementChart;

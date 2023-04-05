import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.color = "#fff";

const options = {
  plugins: {
    legend: {
      labels: {
        // color: "#efa506",
        color: "#fff",
        font: { family: "Oswald, sans-serif" },
      },
    },
  },
};

const Chart = ({ title, data }) => {
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
      <Pie data={data} options={options} />
      <h3 style={{ marginTop: 10, marginBottom: 0 }}>{title}</h3>
    </Paper>
  );
};

export default Chart;

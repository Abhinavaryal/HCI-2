import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import Paper from "@mui/material/Paper";

const EventTime = () => {
  const [value, onChange] = useState("10:00");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        {/* <div
          style={{
            display: "flex",
            gap: 89,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#fff",
              margin: 0,
              height: "fit-content",
              position: "relative",
              top: 5,
            }}
          >
            {value["$H"]}:{value["$m"]}:00
          </h3>

          <Box sx={{ minWidth: 70 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "#fff", fontSize: 10 }}
              >
                SELECT
              </InputLabel>
              <Select
                sx={{
                  "& #demo-simple-select": {
                    paddingX: 0,
                    color: "#fff",
                  },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ampm}
                label="SELECT"
                onChange={handleChange}
              >
                <MenuItem value={"AM"}>AM</MenuItem>
                <MenuItem value={"PM"}>PM</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <button
            class="lgx-btn-yellow customized-btn"
            style={{ padding: 0 }}
            onClick={() => {
              setValue(dayjs(new Date().toISOString()));
            }}
          >
            CURRENT TIME
          </button>
        </div>

        <TimeClock
          // view={["hours", "minutes", "seconds"]}
          // openTo={["hours", "minutes"]}
          sx={{
            "& .css-1j9v0by-MuiClock-root": {
              marginX: 0,
              marginY: 0,
              textAlign: "center",
            },
            "& .css-1jykf3e-MuiTimeClock-root": {
              width: "inherit",
            },
            // "& .css-1omzp9l-MuiTimeClock-root": {

            // },
            color: "#fff",
          }}
          style={{ padding: 0, marginTop: 68, width: "auto", color: "#fff" }}
          value={value}
          onChange={(newValue) => {
            console.log(newValue);
            setValue(newValue);
          }}
          ampm={false}
        /> */}
        <StaticTimePicker
          onChange={(event) => {
            console.log(event);
          }}
        />

        <h3 style={{ marginTop: 10, marginBottom: 0 }}>EVENT TIME</h3>
      </Paper>
    </LocalizationProvider>
  );
};

export default EventTime;

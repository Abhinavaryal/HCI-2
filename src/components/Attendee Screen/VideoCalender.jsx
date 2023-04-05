import React from "react";
import Box from "@mui/material/Box";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

const VideoCalender = () => {
  const values = [
    new Date("4/6/2023"),
    new Date("4/25/2023"),
    new Date("4/11/2023"),
    new Date("4/20/2023"),
  ];
  return (
    <Box style={{ display: "flex", justifyContent: "center", gap: 300 }}>
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=299&href=https%3A%2F%2Fwww.facebook.com%2Fufgatordays%2Fvideos%2F263551262591900%2F&show_text=false&width=560&t=0"
        width="560"
        height="299"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        //   allow={{autoplay: ""}}
        // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>

      <CalendarComponent
        id="calendar"
        isMultiSelection={true}
        showTodayButton={false}
        values={values}
        // style={{ maxWidth: "fit-content", height: 383 }}
      />
    </Box>
  );
};

export default VideoCalender;

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const SubscriptionCard = ({ price, name, benifits }) => {
  console.log(benifits);
  return (
    <Card
      sx={{
        maxWidth: 250,
        textAlign: "center",
        backgroundColor: "rgba(27, 39, 61, .95)",
        height: "fit-content",
      }}
    >
      <CardContent>
        <Typography
          sx={{ marginBottom: 1.5 }}
          variant="h1"
          color="rgb(239, 165, 6)"
          gutterBottom
        >
          {price}
        </Typography>
        <Typography color="rgb(239, 165, 6)" variant="h4">
          <b>{name}</b>
        </Typography>
        <div style={{ textAlign: "left", marginTop: 15 }}>
          {benifits.map((ele) => {
            return (
              <p style={{ color: "rgb(239, 165, 6)" }}>
                {bull} {ele}
              </p>
            );
          })}
        </div>
      </CardContent>
      <CardActions sx={{ textAlign: "right" }}>
        <button
          className="lgx-btn-yellow customized-btn"
          style={{ margin: "auto 10px 10px auto" }}
        >
          BUY
        </button>
      </CardActions>
    </Card>
  );
};

export default SubscriptionCard;

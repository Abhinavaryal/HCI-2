import React from "react";
import Paper from "@mui/material/Paper";
import SubscriptionCard from "../SubscriptionCard";

const UFEPPlus = [
  "Priority Registration",
  "Access to Attended Event's Recording",
  "Access to Live Streams",
];

const UFEPPro = [
  "All previous plan benefits",
  "Access to past recordings",
  "Access to live streams",
];

const UFEPUltra = [
  "All previous plan benefits",
  "Access to all the past recordings",
  "Access to all the live streams",
  "Ability to download the VOD",
];

const Subscriptions = () => {
  return (
    <Paper
      elevation={1}
      style={{
        padding: "5px 10px 10px 10px",
        backgroundColor: "#2a3748",
        marginBottom: 25,
      }}
      //   className="toDoCheckList"
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: 10,
          color: "#efa506",
          marginTop: 0,
        }}
      >
        SUBSCRIPTIONS
      </h3>

      <div style={{ display: "flex", gap: 350, marginTop: 20 }}>
        <SubscriptionCard price="$4.99" name="UFEP PLUS" benifits={UFEPPlus} />

        <SubscriptionCard price="$7.49" name="UFEP PRO" benifits={UFEPPro} />

        <SubscriptionCard
          price="$8.49"
          name="UFEP ULTRA"
          benifits={UFEPUltra}
        />
      </div>
    </Paper>
  );
};

export default Subscriptions;

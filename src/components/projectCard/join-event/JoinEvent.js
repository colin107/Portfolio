import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

export default function JoinEvent() {
  return (
    <div>
      <div>
        Developed a full stack event platform web application using React,
        Python, and AWS Cloud Services.
      </div>
      <div>
        Got user information via Google Identity Services Login with React
      </div>
      <div>
        <img
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            transform: "scale(0.9)",
          }}
          src={require(`../../../assests/images/JoinEvent1.png`)}
          // alt={degree.alt_name}
        />
        <img
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            transform: "scale(0.9)",
          }}
          src={require(`../../../assests/images/JoinEvent2.png`)}
          // alt={degree.alt_name}
        />
        <img
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            transform: "scale(0.9)",
          }}
          src={require(`../../../assests/images/JoinEvent3.png`)}
          // alt={degree.alt_name}
        />
      </div>
    </div>
  );
}

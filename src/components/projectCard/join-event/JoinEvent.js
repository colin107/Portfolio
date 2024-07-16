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
        Please feel free to explore "Join Event" at &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://main.d17caj9rxk8awk.amplifyapp.com/"
        >
          https://main.d17caj9rxk8awk.amplifyapp.com/
        </a>
      </div>
      <br></br>
      <div>
        I developed a full-stack web application using React, Python, and AWS
        Cloud services, which facilitates users in creating, discovering, and
        joining various events.
      </div>
      <div>
        For user authentication, I implemented Google Identity Services within
        the React framework, enhancing security and user experience by
        streamlining the login processes.
      </div>
      <div>
        Additionally, I utilized DynamoDB for efficient data storage and
        retrieval, effectively handling high volumes of event data and user
        interactions with high availability and scalability.
      </div>
      {/* <div>
        Got user information via Google Identity Services Login with React
      </div> */}
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

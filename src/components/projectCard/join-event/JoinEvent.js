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
        Please feel free to explore "Join Circle" at &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://main.d17caj9rxk8awk.amplifyapp.com/"
        >
          https://main.d17caj9rxk8awk.amplifyapp.com/
        </a>
        &nbsp;and the source code &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/colinwong107/JoinCircle"
        >
          https://github.com/colinwong107/JoinCircle
        </a>
      </div>
      <br></br>
      <div>
        Join Circle is a full-stack web application using React, Python, and AWS
        Cloud services, which facilitates users in creating, discovering, and
        joining various events.
      </div>
      <div>
        Google Identity Services were implemented within the React framework for
        user authentication, enhancing security and streamlining the login
        process to improve the user experience.
      </div>
      <div>
        DynamoDB was utilized for efficient data storage and retrieval, ensuring
        the application can handle high volumes of event data and user
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

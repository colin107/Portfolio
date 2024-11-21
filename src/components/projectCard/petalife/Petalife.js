import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

export default function Petalife() {
  return (
    <>
      <a>
        Please feel free to explore "Petalife" at &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://petalife.net/"
        >
          https://petalife.net/
        </a>
      </a>
      <div>
        <br></br>
      </div>
      <div>
        Petalife is an AI-powered GPT chatbot designed to help detect and
        address pet health issues early. It utilizes React for front-end
        development and Python for back-end integration. Users can upload a
        photo of their pet's stool for analysis to assess its health status or
        ask any pet-related health questions, such as, "What should I feed my
        pet to improve their digestive health?" to receive instant, expert
        advice. The application is deployed using AWS Cloud services, ensuring
        scalability, reliability, and continuous availability for users.
        <br></br>
      </div>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/9ihgNyyMWdc`}
          title="YouTube Short"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </>
  );
}

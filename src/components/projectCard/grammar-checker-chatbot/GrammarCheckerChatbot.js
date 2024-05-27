import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

export default function GrammerCheckerChatbot() {
  return (
    <div>
      <div>
        Developed a full-stack web application featuring a custom AI GPT chatbot
        for checking grammatical errors in sentences, using React, Python,
        OpenAI, and AWS Cloud Service.
      </div>
      <div>
        Users are able to input English sentences. If a sentence is correct,
        respond with 'Correct.' If incorrect, explain the error and provide the
        correct sentence.
      </div>

      <img
        style={{
          maxWidth: "70%",
          maxHeight: "70%",
          transform: "scale(0.9)",
        }}
        src={require(`../../../assests/images/Grammar-Checker-Chatbot.png`)}
        // alt={degree.alt_name}
      />
    </div>
  );
}

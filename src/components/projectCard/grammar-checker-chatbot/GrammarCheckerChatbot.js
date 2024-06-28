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
        I developed an AI-powered GPT chatbot that utilizes React for front-end
        development and Python for back-end integration, aimed at providing
        real-time grammar checking within a web application. By integrating
        OpenAI's GPT models, the chatbot analyzes and provides real-time
        responses to user inputs, accurately identifying grammatical errors. The
        design of the chatbot allows it to provide immediate feedback; if the
        input sentence is grammatically correct, it outputs "Correct," and if
        incorrect, it explains the error and suggests the correct sentence
        structure. Additionally, I deployed the application using AWS Cloud
        service to ensure scalable, reliable access and continuous availability
        for users.
      </div>
      {/* <div>
        Users are able to input English sentences. If a sentence is correct,
        respond with 'Correct.' If incorrect, explain the error and provide the
        correct sentence.
      </div> */}

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

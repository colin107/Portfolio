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
        Please feel free to explore "GrammarGuardian" at &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://main.d1i4ruulda4god.amplifyapp.com/"
        >
          https://main.d1i4ruulda4god.amplifyapp.com/
        </a>
      </div>
      <div>
        <br></br>
      </div>
      <div>
        I developed an AI-powered GPT chatbot that utilizes React for front-end
        development and Python for back-end integration, aimed at providing
        real-time grammar checking within a web application.
      </div>
      <div>
        By integrating OpenAI's GPT models, the chatbot analyzes and provides
        real-time responses to user inputs, accurately identifying grammatical
        errors.
      </div>
      {/* <div>
        The design of the chatbot allows it to provide immediate feedback.
      </div> */}
      <div>
        if the input sentence is grammatically correct, it outputs "Correct,"
        and if incorrect, it explains the error and suggests the correct
        sentence structure.
      </div>
      <div>
        Additionally, I deployed the application using AWS Cloud service to
        ensure scalable, reliable access and continuous availability for users.
      </div>
      <img
        style={{
          maxWidth: "70%",
          maxHeight: "70%",
          transform: "scale(1)",
        }}
        src={require(`../../../assests/images/Grammar-Checker-Chatbot.png`)}
        // alt={degree.alt_name}
      />
    </div>
  );
}

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
        &nbsp;and the source code &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/colinwong107/GrammarGuardian"
        >
          https://github.com/colinwong107/GrammarGuardian
        </a>
      </div>
      <div>
        <br></br>
      </div>

      <div>
        GrammarGuardian is an AI-powered GPT chatbot designed to provide
        real-time grammar checking within a web application. It utilizes React
        for front-end development and Python for back-end integration. By
        leveraging OpenAI's GPT models, the chatbot analyzes user inputs and
        delivers real-time feedback, accurately identifying grammatical errors.
        For grammatically correct inputs, it outputs "Correct," while for
        incorrect inputs, it explains the error and suggests an improved
        sentence structure. The application is deployed using AWS Cloud
        services, ensuring scalability, reliability, and continuous availability
        for users.
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

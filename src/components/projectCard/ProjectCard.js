import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import GrammerCheckerChatbot from "./grammar-checker-chatbot/GrammarCheckerChatbot";
import JoinEvent from "./join-event/JoinEvent";
import Petalife from "./petalife/Petalife";
import "./ProjectCard.css";

export default function UnstyledTabsCustomized() {
  return (
    <div className="tab">
      <Tabs defaultValue={1} className="tab">
        <TabsList className="tab">
          <Tab value={1}>Petalife</Tab>
          <Tab value={2}>Grammar Guardian</Tab>
          <Tab value={3}>Join Circle</Tab>
        </TabsList>
        <TabPanel value={1}>
          <Petalife />
        </TabPanel>
        <TabPanel value={2}>
          <GrammerCheckerChatbot />
        </TabPanel>
        <TabPanel value={3}>
          <JoinEvent />
        </TabPanel>
      </Tabs>
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 1.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 2;
  padding: 0px 0px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #edf9fe;
  }

  &:focus {
    color: #edf9fe;
    outline: 3px solid #edf9fe;
  }

  &.${tabClasses.selected} {
    background-color: #edf9fe;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  // margin: 5px;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 1000px;
  max-width: 1000px;
  background-color: #0E6BA8;
  border-radius: 12px;
  margin: 0 auto; // Center horizontally
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
  };
  `
);

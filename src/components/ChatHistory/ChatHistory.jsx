import { BackgroundImage } from "@mantine/core";
import React from "react";
import person_logo from "../../img/person-circle.svg";
import "./ChatHistory.css";
const ChatHistory = () => {
  return (
    <div className="ChatHistory">
      <div className="History1">
        <img src={person_logo} alt="" width="32px" height="32px" />
        <h4 style={{ marginTop: "10px" }}>Person 1</h4>
      </div>

      <div style={{ marginTop: "10rem" }}>
        <span style={{ fontSize: "14px", marginLeft: "2.5rem" }}>
          Begin chatting with your friend!
        </span>
      </div>
    </div>
  );
};

export default ChatHistory;

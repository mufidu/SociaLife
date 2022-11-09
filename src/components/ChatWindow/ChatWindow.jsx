import React from "react";
import person_logo from "../../img/person-circle.svg";
import "./ChatWindow.css";
import chat_bubble from "../../img/purple.PNG";
import chat_bubble2 from "../../img/grey.PNG";
const ChatWindow = () => {
  return (
    <div className="ChatWindow">
      <div style={{ marginTop: "15px" }}>
        <img src={person_logo} alt="" width="32px" height="32px" />
        <h3>Person 1</h3>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <img src={chat_bubble} alt="" width="289px" height="114px" />
      </div>
      <div style={{ marginTop: "1rem", marginLeft: "50rem" }}>
        <img src={chat_bubble2} alt="" width="289px" height="114px" />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <img src={chat_bubble} alt="" width="289px" height="114px" />
      </div>
      <div className="TextBox">
        <input type="text" placeholder="Speak your mind!" />
        <button className="button sendButton" type="submit">
          send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

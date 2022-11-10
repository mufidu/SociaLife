import React from "react";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatSearch from "../ChatSearch/ChatSearch";
import "./ChatList.css";
function ChatList() {
  return (
    <div className="ChatList">
      <ChatSearch />
      <ChatHistory />
    </div>
  );
}

export default ChatList;

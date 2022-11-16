import React from "react";
import "./ChatSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
import { Center } from "@mantine/core";
function ChatSearch() {
  return (
    <div className="ChatSearch">
      <div>
        <span
          style={{
            fontSize: "35px",
            justifyContent: Center,
            fontWeight: "bold",
            wordSpacing: "10px",
          }}
        >
          Chats
        </span>
      </div>
      <div className="Search">
        <div className="s-icon">
          <UilSearch />
        </div>
        <input type="text" placeholder="Search Chat..." />
      </div>
    </div>
  );
}

export default ChatSearch;

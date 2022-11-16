import React, { useEffect, useState } from "react";
import { getMessages } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequest";
import person_logo from "../../img/person-circle.svg";
import "./ChatBox.css";
import { format } from "timeago.js";

const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);

  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetching data for messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat]);

  return (
    <>
      <div className="chatbox-container">
        <>
          {/* chat header */}
          <div className="chat-header">
            <div className="friend">
              <div>
                <img src={person_logo} alt="" width="50px" />
                <div className="name" style={{ fontSize: "0.8rem" }}>
                  <span>{userData?.username}</span>
                </div>
              </div>
            </div>
            <hr style={{ width: "100%", border: "0.1px solid black" }} />
          </div>

          {/* chat body */}
          <div className="chat-body">
            {messages.map((message) => (
              <>
                <div
                  className={
                    message.senderId === currentUser ? "message own" : "message"
                  }
                >
                  <span>{message.text}</span>
                  <span>{format(message.createdAt)}</span>
                </div>
              </>
            ))}
          </div>

          {/* chat-sender */}
          <div className="chat-sender">
            
          </div>
        </>
      </div>
    </>
  );
};

export default ChatBox;

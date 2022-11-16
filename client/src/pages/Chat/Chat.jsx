import React from "react";
import "./Chat.css";
import small_logo from "../../img/small_logo.png";
import person_logo from "../../img/person-fill.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userChats } from "../../api/ChatRequest";
import Conversation from "../../components/Conversation/Conversation";
import ChatSearch from "../../components/ChatSearch/ChatSearch";
import ChatBox from "../../components/ChatBox/ChatBox";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  return (

    <div className="Chat">
      {/* side-bar */}
      <div className="side-bar">
        <div className="logo">
          <img src={small_logo} alt=""></img>
        </div>

        <div className="profile">
          <img
            src={person_logo}
            alt=""
            style={{ position: "absolute", bottom: "1rem" }}
          ></img>
        </div>
      </div>

      {/* chat-container */}
      <div className="chat-container">
        <ChatSearch />
        <div className="chat-list">
          {chats.map((chat) => (
            <div onClick={() => setCurrentChat(chat)}>
              <Conversation data={chat} currentUser={user._id} />
            </div>
          ))}
        </div>
      </div>

      {/* chat-window */}
      <div className="chat-window">
        <ChatBox chat={currentChat} currentUser = {user._id}/>
      </div>
    </div>
  );
};

export default Chat;

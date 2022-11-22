import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { userChats } from "../../api/ChatRequest";
import addFriend from "../../img/add-user.png";
// import { UilSetting } from "@iconscout/react-unicons";
// import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
// import Comment from "../../img/comment.png";
import Conversation from "../../components/Conversation/Conversation";
// import * as UserApi from "../../api/UserRequest.js";
// import LogoSearch from "../../components/LogoSearch/LogoSearch";
import "./Chat.css";
import ChatBox from "../../components/ChatBox/ChatBox";
import { io } from "socket.io-client";
import logo from "../../img/small_logo.png";
import profile from "../../img/person-fill.svg";
import { logOut } from "../../actions/AuthAction";
import ProfileModal from "../../components/ProfileModal.jsx/ProfileModal";
import FriendModal from "../../components/FriendModal/FriendModal";
// import { useParams } from "react-router-dom";
// import InfoCard from "../../components/InfoCard/InfoCard";

const Chat = () => {
  const [profileModalOpened, setProfileModalOpened] = useState(false);
  const [friendModalOpened, setFriendModalOpened] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

  const refreshPage = () => {
    window.location.reload(false);
  }

  // get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // connect to socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8800", { transports: ["websocket"] });
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // send message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // receive message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data);
    });
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="Chat">
      {/* side bar */}
      <div className="Side-bar-chat">
        <div className="logo">
          <img
            src={logo}
            alt=""
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            onClick={refreshPage}
          />
        </div>
        <div className="profile">
          <img
            src={profile}
            alt=""
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            onClick={() => setProfileModalOpened(true)}
          />
          <ProfileModal
            modalOpened={profileModalOpened}
            setModalOpened={setProfileModalOpened}
            data={user}
          />
        </div>
        <button className="button logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* <InfoCard/> */}

      {/* left side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
          <div className="Chat-header">
            <span style={{ fontWeight: "bold", fontSize: "40px" }}>Chats</span>
            <img
              src={addFriend}
              alt=""
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={() => setFriendModalOpened(true)}
            />
            <FriendModal
              modalOpened={friendModalOpened}
              setModalOpened={setFriendModalOpened}
            />
          </div>

          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="Right-side-chat">
        {/* chat body */}
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receiveMessage={receiveMessage}
        />
      </div>
    </div>
  );
};

export default Chat;

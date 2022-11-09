import React from "react";
import ChatList from "../../components/ChatList/ChatList";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Dashboard from "../../components/Dashboard/Dashboard";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Dashboard />
      <ChatList />
      <ChatWindow />
    </div>
  );
};

export default Home;

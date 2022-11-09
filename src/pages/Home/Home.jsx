import React from "react";
import ChatList from "../../components/ChatList/ChatList";
import Dashboard from "../../components/Dashboard/Dashboard";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Dashboard />
      <ChatList />
      <div className="chatside">
        <h2 style={{ marginTop: "20rem", marginLeft: "25rem" }}>
          CHAT PLACEHOLDER
        </h2>
      </div>
    </div>
  );
};

export default Home;

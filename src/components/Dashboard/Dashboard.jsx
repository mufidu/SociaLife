import React from "react";
import "./Dashboard.css";
import small_logo from "../../img/small_logo.png";
import chat_logo from "../../img/chat-left-text.svg";
import cont_logo from "../../img/person-square.svg";
import gear_logo from "../../img/gear.svg";
import person_logo from "../../img/person-fill.svg";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div style={{ marginLeft: "5px" }}>
        <img
          src={small_logo}
          alt=""
          width="30px"
          height="35px"
          top="44px"
          left="5px"
        />
      </div>
      <div style={{ marginTop: "15rem", marginLeft: "5px" }}>
        <img src={chat_logo} alt="" width="30px" height="30px" />
      </div>

      <div style={{ marginTop: "10px", marginLeft: "5px" }}>
        <img src={cont_logo} alt="" width="30px" height="30px" />
      </div>

      <div style={{ marginTop: "10px", marginLeft: "4.5px" }}>
        <img src={gear_logo} alt="" width="32px" height="32px" />
      </div>

      <div style={{ marginTop: "17rem", marginLeft: "5px" }}>
        <img src={person_logo} alt="" width="32px" height="32px" />
      </div>
    </div>
  );
};

export default Dashboard;

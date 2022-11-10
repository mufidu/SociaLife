import React from "react";
import "./Dashboard.css";
import small_logo from "../../img/small_logo.png";
import person_logo from "../../img/person-fill.svg";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div style={{ marginLeft: "5px", marginTop: "10px" }}>
        <img
          src={small_logo}
          alt=""
          width="30px"
          height="35px"
          top="44px"
          left="5px"
        />
      </div>

      <div style={{ marginTop: "40rem", marginLeft: "5px" }}>
        <img src={person_logo} alt="" width="32px" height="32px" />
      </div>
    </div>
  );
};

export default Dashboard;

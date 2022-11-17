import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../api/UserRequest";
import person_logo from "../../img/person-circle.svg";
import "./Conversation.css";

const Conversation = ({ data, currentUser }) => {
  const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const {data} = await getUser(userId)
                setUserData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUserData()
    }, [currentUser, data.members])

  return (
    <>
      <div className="friend conversation">
        <div>
          <img
            src={person_logo}
            alt="Profile"
            style={{ width: "32px", height: "32px" }}
          />
          <span style={{ fontSize: "1.5rem", marginLeft: '1rem' }}>
            {userData?.username}
          </span>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;

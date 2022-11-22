import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/UserRequest";
import person from "../../img/person-circle.svg";

const Conversation = ({ data, currentUserId }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        console.log("DATA:", data)
        dispatch({type:"SAVE_USER", data: data})
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  

  return (
    <>
      <div className="follower conversation">
        <div>
          {/* <div className="online-dot"></div> */}
          <img
            src={person}
            alt=""
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: "1.5rem" }}>
            <span>{userData?.username}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', border: '0.1px solid #ececec' }}/>
    </>
  );
};

export default Conversation;

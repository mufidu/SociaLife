import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "timeago.js";
import { getMessages } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequest";
import person from "../../img/person-circle.svg";

const Conversation = ({ data, currentUserId, reminder }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        dispatch({ type: 'SAVE_USER', data: data });
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  const checkLastMessage = async(data) => {
    const { messages } = await getMessages(data._id);
    const lastMessage = format(messages[messages.length - 1].createdAt);
    console.log(lastMessage);
  }
  checkLastMessage(data);

  return (
    <>
      <div className="follower conversation">
        <div>
          <img
            src={person}
            alt=""
            className="followerImage"
            style={{ width: '50px', height: '50px' }}
          />
          <div className="name" style={{ fontSize: '1.5rem' }}>
            <span>{userData?.username}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', border: '0.1px solid #ececec' }} />
    </>
  );
};

export default Conversation;

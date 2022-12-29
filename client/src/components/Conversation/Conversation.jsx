import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "timeago.js";
import { getMessages } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequest";
import person from "../../img/person-circle.svg";

const Conversation = ({ chat, currentUserId }) => {
  let remind = useRef();
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = chat.members.find((id) => id !== currentUserId);
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

  useEffect(() => {
    const checkLastMessage = async(chat) => {
      try {
        const { data } = await getMessages(chat._id);
        const lastMessage = format(data[data.length - 1].createdAt)
        if (lastMessage === '20 minutes ago') {
          remind.current = true;
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLastMessage(chat);
  }, [chat]);

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
            <span>{remind.current ? 'chat now' : ''}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', border: '0.1px solid #ececec' }} />
    </>
  );
};

export default Conversation;

import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMessages } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequest";
import person from "../../img/person-circle.svg";
import warning from "../../img/warning.png"

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
  }, [chat.members, currentUserId, dispatch]);

  useEffect(() => {
    const checkLastMessage = async(chat) => {
      try {
        const { data } = await getMessages(chat._id);
        const messagedTime = new Date(data[data.length - 1].createdAt).getTime();
        const currentTime = Date.now();

        const timeDifferenceInHours = ((currentTime - messagedTime) / 1000) / 3600;
        console.log(timeDifferenceInHours)
        if (timeDifferenceInHours > 24.0) {
          remind.current = true;
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLastMessage(chat);
  }, [chat]);

  const showRemindMessage = () => {
    alert(`Anda sudah tidak berkontak dengan '${userData.username}' selama 14 hari. Ayo kirim pesan sekarang!`)
  }

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
          {remind.current ? (
            <img
              src={warning}
              alt=""
              className="reminder"
              style={{ width: '30px', height: '30px', position: 'absolute', top: '-10px', left: '30px' }}
              onClick={ showRemindMessage }
            ></img>
          ) : (
            ""
          )}
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

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../api/UserRequest";
import person_logo from "../../img/person-circle.svg";

const Conversation = ({ data, currentUser }) => {
  const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const userId = data.members.find((id) => id !== currentUserId);
//     const getUserData = async () => {
//       try {
//         const { data } = await getUser(userId);
//         setUserData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUserData();
//   }, []);

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
    }, [])

  return (
    <>
      <div className="friend conversation">
        <div>
          <img src={person_logo} alt="" width="50px" />
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <span>{userData?.username}</span>
          </div>
        </div>
      </div>
      <hr style={{ width:'85%', border:'0.1px solid #ececec' }}/>
    </>
  );
};

export default Conversation;

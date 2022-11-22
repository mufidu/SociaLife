import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import * as UserApi from "../../api/UserRequest.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { logOut } from "../../actions/AuthAction";

import logo from "../../img/small_logo.png";
import profile from "../../img/person-fill.svg";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <div>
          <img
            src={profile}
            alt=""
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user}
          />
        </div>
      </div>

      <button className="button logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>

    // sidebar
    // <div className="Side-bar-chat">
    //   <div className="logo">
    //     <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
    //   </div>
    //   <div className="profile">
    //     <img
    //       src={profile}
    //       alt=""
    //       style={{ width: "50px", height: "50px", cursor: "pointer" }}
    //       onClick={() => setModalOpened(true)}
    //     />
    //     <ProfileModal
    //       modalOpened={modalOpened}
    //       setModalOpened={setModalOpened}
    //       data={user}
    //     />
    //   </div>
    //   <button className="button logout-button" onClick={handleLogout}>
    //     Logout
    //   </button>
    // </div>
  );
};

export default InfoCard;

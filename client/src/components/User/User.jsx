import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../actions/UserAction.js";

const User = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [added, setAdded] = useState(person.friends.includes(user._id));

  const handleAdd = () => {
    added
      ? dispatch(removeUser(person._id, user))
      : dispatch(addUser(person._id, user));

    setAdded((prev) => !prev);
  };

  return (
    <div className="follower">
      <div>
        <div className="name">
          <span>{person.username}</span>
        </div>
      </div>
      <button
        className={added ? "button fc-button removeButton" : "button fc-button"}
        onClick={handleAdd}
      >
        {added ? "Remove" : "Add"}
      </button>
    </div>
  );
};

export default User;

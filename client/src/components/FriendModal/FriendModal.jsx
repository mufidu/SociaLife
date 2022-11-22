import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAllUser } from "../../api/UserRequest";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/UserAction.js";

import * as ChatApi from "../../api/ChatRequest";


function FriendModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const [formData, setFormData] = useState("");
  const [persons, setPersons] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let usernameFriend = formData.username;
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].username === usernameFriend) {
          dispatch(addUser(persons[i]._id, user));
          alert("User found! User added successfully")
          const dataCreateChat = {
            senderId: user._id,
            receiverId: persons[i]._id,
          };
          ChatApi.createChat(dataCreateChat);
          break;
        }
      }
    //   alert("User not found");
    } catch (error) {
      console.log(error)
    }
    setModalOpened(false);
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Add Friend</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <button className="button infoButton" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </Modal>
  );
}

export default FriendModal;

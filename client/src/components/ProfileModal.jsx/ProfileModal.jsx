import { Modal, useMantineTheme } from "@mantine/core";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../actions/UserAction";
import { getAllUser } from "../../api/UserRequest";



function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [persons, setPersons] = useState([]);
  const dispatch = useDispatch()
  // const param = useParams()
  const {user} = useSelector((state)=>state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (persons.filter(p => p.username === formData.username).length > 0 && !formData.username === user.username) {
      alert('usernamenya udah ada yang pake tuh, ganti ya');
    } else {
      if(formData.password.length < 8) {
        alert('passwordnya minimal 8 huruf ya');
      } else {
        if(formData.password === formData.confirmpass) {
          let UserData = formData;
          dispatch(updateUser(user._id, UserData));
        } else {
          alert('passwordnya ga sesuai')
        }
      }
    }
    setModalOpened(false)
  }

  const resetFormData = () => {
    setFormData({
      username: user.username,
      password: '',
      confirmpass: '',
    });
    setModalOpened(false);
  }
  
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
      onClose={() => resetFormData()}
    >
      <form className="infoForm">
        <h3>Customize</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmpass}
          />
        </div>

        <button className="button infoButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

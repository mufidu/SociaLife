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

    const anotherUser = persons.filter(p => p.username === formData.username);
    
    
    if (anotherUser.length > 0 && anotherUser[0].username !== user.username) {
      alert('Username yang anda inginkan sudah terdaftar');
    } else if ((anotherUser.length > 0 && anotherUser[0].username === user.username) || anotherUser.length === 0){
      if(formData.password.length < 8) {
        alert('Password minimal 8 karakter');
      } else {
        if(formData.password === formData.confirmpass) {
          dispatch(updateUser(user._id, formData));
        } else {
          alert('Konfirmasi password tidak sesuai')
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

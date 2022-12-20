import * as UserApi from '../api/UserRequest';
import * as ChatApi from '../api/ChatRequest';
import axios from 'axios';

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: 'UPDATING_START' });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    if (window.confirm('yakin mau update data nya?') === true) {
      dispatch({ type: 'UPDATING_SUCCESS', data: data });
      alert('update berhasil brow');
    } else {
      alert('ok, gajadi di update ya');
    }
  } catch (error) {
    dispatch({ type: 'UPDATING_FAIL' });
    alert('update gagal, coba cek lagi udah sesuai belum');
  }
};

export const addUser = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_USER' });

    const response = await axios.put(`http://localhost:5000/user/${id}/add`, data);

    UserApi.addUser(id, data);

    const dataCreateChat = {
      senderId: data._id,
      receiverId: id,
    };
    ChatApi.createChat(dataCreateChat);
    alert('sip, usernya udah ketambah, coba di refresh dulu kalau belum muncul ya');
  } catch (error) {
    alert('lo gaboleh nambah orang yang sama lagi ye')
  }
};

export const removeUser = (id, data) => async (dispatch) => {
  dispatch({ type: 'REMOVE_USER' });
  UserApi.removeUser(id, data);
};

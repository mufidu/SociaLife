import * as UserApi from '../api/UserRequest';
import * as ChatApi from '../api/ChatRequest';
import axios from 'axios';

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: 'UPDATING_START' });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    if (window.confirm('Yakin ingin mengupdate data anda?') === true) {
      dispatch({ type: 'UPDATING_SUCCESS', data: data });
      alert('Update Berhasil');
    } else {
      alert('Update Dibatalkan');
    }
  } catch (error) {
    dispatch({ type: 'UPDATING_FAIL' });
    alert('Update Gagal, mohon refresh terlebih dahulu');
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
    alert('User ditambah, mohon refresh terlebih dahulu');
  } catch (error) {
    alert('Tidak boleh menambah User yang sudah menjadi teman')
  }
};

export const removeUser = (id, data) => async (dispatch) => {
  dispatch({ type: 'REMOVE_USER' });
  UserApi.removeUser(id, data);
};

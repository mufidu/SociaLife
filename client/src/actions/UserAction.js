import * as UserApi from '../api/UserRequest';

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
  dispatch({ type: 'ADD_USER' });
  if (
    window.confirm('user ketemu nih, yakin mau nambah dia sebagai teman?') ===
    true
  ) {
    UserApi.addUser(id, data);
    alert('sip, usernya udah ketambah, coba cek list chatnya');
  } else {
    alert('ok, gajadi nambahin dia ya');
  }
  
};

export const removeUser = (id, data) => async (dispatch) => {
  dispatch({ type: 'REMOVE_USER' });
  UserApi.removeUser(id, data);
};

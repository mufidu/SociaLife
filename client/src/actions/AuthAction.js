import * as AuthApi from "../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  // memberi tahu reducer bahwa autentikasi dimulai
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    // memberi tahu reducer bahwa autentikasi berhasil
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("login berhasil")
  } catch (error) {
    console.log(error);
    // memberi tahu reducer bahwa autentikasi gagal
    dispatch({ type: "AUTH_FAIL" });
    alert("login gagal, coba cek lagi username dan password yang dimasukkin")
  }
};

export const signUp = (formData) => async (dispatch) => {
  // memberi tahu reducer bahwa autentikasi dimulai
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    // memberi tahu reducer bahwa autentikasi berhasil
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("registrasi berhasil")
  } catch (error) {
    console.log(error);
    // memberi tahu reducer bahwa autentikasi gagal
    dispatch({ type: "AUTH_FAIL" });
    alert("registrasi gagal, username yang kamu mau udah ada yang punya nih, ganti aja ya")
  }
};

export const logOut = () => async (dispatch) => {
  if (window.confirm("yakin mau keluar? ga kepencet kan?") === true) {
    dispatch({ type: 'LOG_OUT' });
  }
}; 
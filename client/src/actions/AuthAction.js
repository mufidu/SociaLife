import * as AuthApi from "../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  // memberi tahu reducer bahwa autentikasi dimulai
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    // memberi tahu reducer bahwa autentikasi berhasil
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("Login berhasil")
  } catch (error) {
    console.log(error);
    // memberi tahu reducer bahwa autentikasi gagal
    dispatch({ type: "AUTH_FAIL" });
    alert("Login Gagal, mohon pastikan kembali username atau password yang dimasukkan")
  }
};

export const signUp = (formData) => async (dispatch) => {
  // memberi tahu reducer bahwa autentikasi dimulai
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    // memberi tahu reducer bahwa autentikasi berhasil
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("Registrasi Berhasil")
  } catch (error) {
    console.log(error);
    // memberi tahu reducer bahwa autentikasi gagal
    dispatch({ type: "AUTH_FAIL" });
    alert("Registrasi Gagal, username yang anda masukkan sudah terdaftar")
  }
};

export const logOut = () => async (dispatch) => {
  if (window.confirm("Yakin ingin keluar?") === true) {
    dispatch({ type: 'LOG_OUT' });
  }
}; 


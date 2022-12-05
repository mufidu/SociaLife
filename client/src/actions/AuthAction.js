import * as AuthApi from "../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  // memberi tahu reducer bahwa autentikasi dimulai
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    // memberi tahu reducer bahwa autentikasi berhasil
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("Login successful")
  } catch (error) {
    console.log(error);
    // memberi tahu reducer bahwa autentikasi gagal
    dispatch({ type: "AUTH_FAIL" });
    alert("Login failed")
  }
};

export const signUp = (formData) => async (dispatch) => {
  // memberi tahu reducer bahwa autentikasi dimulai
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    // memberi tahu reducer bahwa autentikasi berhasil
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("Registration successful")
  } catch (error) {
    console.log(error);
    // memberi tahu reducer bahwa autentikasi gagal
    dispatch({ type: "AUTH_FAIL" });
    alert("Registration failed")
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
}; 
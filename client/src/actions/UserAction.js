import * as UserApi from "../api/UserRequest"

export const updateUser = (id, formData) => async(dispatch) => {
    dispatch({type: "UPDATING_START"})
    try {
        const {data} = await UserApi.updateUser(id, formData)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "UPDATING_FAIL"})
    }
}

export const addUser = (id, data) => async(dispatch) => {
    dispatch({ type: "ADD_USER" })
    UserApi.addUser(id, data)
}

export const removeUser = (id, data) => async (dispatch) => {
  dispatch({ type: "REMOVE_USER" });
  UserApi.removeUser(id, data);
};
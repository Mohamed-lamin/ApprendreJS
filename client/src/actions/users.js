import * as api from "../api/index"

export const signup = (formData, history) => async dispatch => {
  try {
    const { data } = await api.signup(formData)
    dispatch({ type: "AUTH", data })
    history.push("/")
  } catch (error) {
    console.log(error)
  }
}
export const signin = (formData, history) => async dispatch => {
  try {
    const { data } = await api.signin(formData)
    dispatch({ type: "AUTH", data })
    history.push("/")
  } catch (error) {
    console.log(error)
  }
}
export const logout = () => async dispatch => {
  try {
    dispatch({ type: "LOGOUT" })
  } catch (error) {
    console.log(error)
  }
}

import * as api from "../api/index"

export const getContenu = () => async dispatch => {
  try {
    const { data } = await api.fetchData()

    dispatch({ type: "FETCH", payload: data })
  } catch (error) {
    console.log(error)
  }
}

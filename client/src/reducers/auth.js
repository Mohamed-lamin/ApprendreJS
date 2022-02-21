const reducers = (state = { auth: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }))

      return { ...state, auth: action.data, loading: false, errors: null }

    case "LOGOUT":
      localStorage.clear()
      return state

    default:
      return state
  }
}

export default reducers

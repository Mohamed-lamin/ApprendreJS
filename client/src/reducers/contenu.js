const reducersContenu = (posts = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action?.payload

    default:
      return posts
  }
}
export default reducersContenu

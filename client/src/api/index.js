import axios from "axios"

const url = "https://apprdaminjs.herokuapp.com"

// export const signup = formaData =>
//   axios.post("http://localhost:5000/users/signup", formaData)
export const signup = formData => axios.post(`${url}/users/signup`, formData)
export const signin = formData => axios.post(`${url}/users/signin`, formData)

export const fetchData = () => axios.get(`${url}/posts`)

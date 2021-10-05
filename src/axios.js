import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backbackend.herokuapp.com",
});

export default instance;

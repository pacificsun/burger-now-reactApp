import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-9486b.firebaseio.com/"
});
export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mernprojesi.herokuapp.com/",
});
export default instance;

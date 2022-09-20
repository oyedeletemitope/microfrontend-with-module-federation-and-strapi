import axios from "axios";
const url = "http://localhost:1337/api/displays";
export const readDisplay = () => axios.get(url);
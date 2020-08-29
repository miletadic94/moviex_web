import axios from "axios";
import { getUserToken } from "../services/localStorage.service";

const token = getUserToken();
axios.defaults.headers.common["Authorization"] = token;

export default axios;

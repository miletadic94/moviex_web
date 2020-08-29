import axios from "../utils/axios";
import { setUserToken, setUserId } from "./localStorage.service";
import { BASE_URL } from "../utils/constants";

export const login = async (req) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/login`, req);
    const { token, user } = data;

    await setUserToken(token);
    await setUserId(user.id);
    return user;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (user) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/register`, user);

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const forgotPassword = async (user) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/forgot-password`, user);

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const resetPassword = async (user) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/reset-password`, user);

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

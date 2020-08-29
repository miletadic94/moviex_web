import axios from "../utils/axios";

const BASE_URL = "http://localhost:8080";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const postUser = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const patchUser = async (id, formData) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/users/${id}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

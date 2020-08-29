import axios from "../utils/axios";

const BASE_URL = "http://localhost:8080/actors";

export const getActors = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getActor = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const postActor = async (formData) => {
  try {
    const { data } = await axios.post(BASE_URL, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const putActor = async (id, formData) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/${id}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

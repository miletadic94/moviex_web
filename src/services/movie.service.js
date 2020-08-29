import axios from "../utils/axios";
import { BASE_URL } from "../utils/constants";

const PATH = "/movies";

export const getMovies = async (title) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PATH}/?title=${title}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMovie = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PATH}/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const postMovie = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}${PATH}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const putMovie = async (id, formData) => {
  try {
    const { data } = await axios.put(`${BASE_URL}${PATH}/${id}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

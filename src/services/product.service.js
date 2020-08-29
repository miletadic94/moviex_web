import axios from "../utils/axios";
import { BASE_URL } from "../utils/constants";

const PATH = "/products";

export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PATH}/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addProduct = async (id, formData) => {
  try {
    const { data } = await axios.put(`${BASE_URL}${PATH}/${id}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

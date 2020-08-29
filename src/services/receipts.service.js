import axios from "../utils/axios";
import { BASE_URL } from "../utils/constants";

const PATH = "/receipts";

export const getReceipt = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PATH}/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getReceipts = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PATH}/user/${id}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const postReceipt = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}${PATH}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const putReceipt = async (id, formData) => {
  try {
    const { data } = await axios.put(`${BASE_URL}${PATH}/${id}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

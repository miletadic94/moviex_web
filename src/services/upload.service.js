import axios from "axios";

const BASE_URL = "http://localhost:8080/upload/image";
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const uploadImage = async (id, formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${id}`, formData, config);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getImage = async (id) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${id}`, config);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

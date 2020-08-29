import axios from "../utils/axios";

const BASE_URL = "http://localhost:8080/reviews";

export const postReview = async (movieId, formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${movieId}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

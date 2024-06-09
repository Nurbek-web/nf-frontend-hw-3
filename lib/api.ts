import axiosInstance from "./axiosInstance";

export const fetchPosts = async (url: string, options = {}) => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

export const fetchPost = async (id: string, options = {}) => {
  try {
    const response = await axiosInstance(`/posts/${id}`, options);
    return response.data;
  } catch (error) {
    return 404;
  }
};

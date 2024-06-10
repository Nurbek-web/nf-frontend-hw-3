import axiosInstance from "./axiosInstance";

export const fetchPosts = async (options = {}) => {
  // try {
  const response = await axiosInstance("/posts", options);
  return response.data;
  // } catch (error) {
  //   console.error("Error retrieving data:", error);
  //   throw new Error("Could not get data");
  // }
};

export const fetchPost = async (id: string, options = {}) => {
  try {
    const response = await axiosInstance(`/posts/${id}`, options);
    return response.data;
  } catch (error) {
    return 404;
  }
};

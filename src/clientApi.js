import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  fetchImages() {
    return apiClient.get("api/get/images");
  },
  uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);
    return apiClient.post("api/post/image", formData);
  },
};

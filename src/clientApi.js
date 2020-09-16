import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api",
});

export default {
  fetchImages() {
    return axiosClient.get("get/images");
  },
  uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);
    return axiosClient.post("post/image", formData);
  },
};

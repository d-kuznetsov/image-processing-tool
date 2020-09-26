import axios from "axios";
import "./styles/base.scss";
import logo from "./assets/logo.png";

const BACKEND_URL = "http://localhost:3000/api/get/images?limit=3&order=name";

document.querySelector("img").setAttribute("src", logo);

(async function fetchImages() {
  try {
    document.querySelector("pre").innerHTML = "Loading...";
    const res = await axios.get(BACKEND_URL);
    document.querySelector("pre").innerHTML = JSON.stringify(res.data, null, 2);
  } catch (err) {
    document.querySelector("pre").innerHTML = err;
  }
})();

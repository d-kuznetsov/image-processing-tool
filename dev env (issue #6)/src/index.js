import "./styles/base.scss";
import logo from "./assets/logo.png";

document.querySelector("img").setAttribute("src", logo);

(async function fetchImages() {
  try {
    const res = await fetch(
      "http://localhost:8080/api/get/images?limit=3&order=name"
    );
    const data = await res.json();
    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
  } catch (err) {
    document.querySelector("pre").innerHTML = err;
  }
})();

import axios from "axios";
import { imgApi, quoteApi } from "./api";
import "./styles.scss";

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("Service worker successfully registered", registration);
      })
      .catch((err) => {
        console.log("Service worker registration failed", err);
      });
  }
});
window.addEventListener("load", () => {
  document.querySelector(".date").innerHTML = new Date().toDateString();

  axios.get(imgApi).then((res) => {
    const { imagePath, primaryColorDetails } = res.data;
    document.querySelector(".bg-image").setAttribute("src", imagePath);
    document.querySelector("body").style.backgroundColor =
      primaryColorDetails.hex;
  });

  axios.get(quoteApi).then((res) => {
    const { content, author } = res.data;
    document.querySelector(".quote").innerHTML = content;
    document.querySelector(".author").innerHTML = author;
  });
});

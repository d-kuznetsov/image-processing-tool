import React from "react";

import { useState, useEffect } from "react";
import { FILE_EXT } from "../constants";
import { useAppContext } from "../context";

export default function Viewer() {
  const { imageToView, setImageToView, images } = useAppContext();
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const foundImg = images.find((image) => image.id === imageToView.id);
    foundImg && setColors(foundImg.colors);
  });

  return (
    <div className="overlay ">
      <ul className="absolute top-16 left-16 p-0 m-0">
        {colors.map((color) => (
          <li
            className="h-6 w-12 rounded mb-1"
            key={color}
            style={{ backgroundColor: `${color}` }}
          />
        ))}
      </ul>
      <div className="flex-center overflow-auto content-area bg-blue-900 rounded">
        <img
          className="rounded"
          src={`api/get/image/${imageToView.size}/${imageToView.id}${FILE_EXT}`}
        />
      </div>
      <div
        className="absolute top-4 right-4 text-blue-100 hover:text-blue-200 cursor-pointer"
        onClick={() => {
          setImageToView(null);
        }}
      >
        X
      </div>
    </div>
  );
}

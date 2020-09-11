import { FILE_EXT } from "../config";
import { useState, useEffect } from "react";
import { useAppContext } from "../context";

export default function Viewer() {
  const [colors, setColors] = useState([]);
  const { imageToView, setImageToView, images } = useAppContext();
  useEffect(() => {
    const foundImg = images.find((image) => image.id === imageToView.id);
    foundImg && setColors(foundImg.colors);
  });

  return (
    <div className="overlay ">
      <ul className="absolute top-12 left-12 p-0 m-0">
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
          src={`api/image/${imageToView.size}/${imageToView.id}.${FILE_EXT}`}
        />
      </div>
      <button
        className="absolute top-4 right-4 h-8 w-8 text-blue-100 hover:text-blue-400"
        onClick={() => {
          setImageToView(null);
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 384 384"
      className="fill-current"
    >
      <g>
        <g>
          <path d="M368,176c-8.832,0-16,7.168-16,16c0,88.224-71.776,160-160,160S32,280.224,32,192S103.776,32,192,32    c42.952,0,83.272,16.784,113.536,47.264c6.224,6.264,16.36,6.304,22.624,0.08c6.272-6.224,6.304-16.36,0.08-22.632    C291.928,20.144,243.536,0,192,0C86.128,0,0,86.128,0,192s86.128,192,192,192c105.864,0,192-86.128,192-192    C384,183.168,376.832,176,368,176z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M214.624,192l36.688-36.688c6.248-6.248,6.248-16.376,0-22.624s-16.376-6.248-22.624,0L192,169.376l-36.688-36.688    c-6.24-6.248-16.384-6.248-22.624,0c-6.248,6.248-6.248,16.376,0,22.624L169.376,192l-36.688,36.688    c-6.248,6.248-6.248,16.376,0,22.624C135.808,254.44,139.904,256,144,256s8.192-1.56,11.312-4.688L192,214.624l36.688,36.688    C231.816,254.44,235.904,256,240,256s8.184-1.56,11.312-4.688c6.248-6.248,6.248-16.376,0-22.624L214.624,192z" />
        </g>
      </g>
    </svg>
  );
};

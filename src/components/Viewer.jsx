import React, { useEffect } from "react";
import { FILE_EXT } from "../constants";
import { useAppContext } from "../context";

export default function Viewer() {
  const { imageToView, setImageToView } = useAppContext();
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.code === "Escape" && setImageToView(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [0]);

  return (
    <div className="overlay ">
      <ul className="absolute top-16 left-16 p-0 m-0">
        {imageToView?.colors.map((color) => (
          <li
            className="h-6 w-12 rounded mb-1"
            key={color}
            style={{ backgroundColor: `${color}` }}
            title={color}
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
        title="close"
      >
        <CloseIcon />
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg viewBox="0 0 329.26933 329" className="h-4 w-4 fill-current">
      <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
    </svg>
  );
};

/* const DownloadIcon = () => {
  return (
    <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current">
      <g>
        <g>
          <path d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64    c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472    c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z" />
        </g>
      </g>
    </svg>
  );
}; */

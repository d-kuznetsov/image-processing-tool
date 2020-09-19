import React, { useEffect } from "react";
import { FILE_EXT } from "../constants";
import { useAppContext } from "../context";
import ColorPalette from "./ColorPalette";

export default function Viewer() {
  const { imageToView, setImageToView } = useAppContext();
  const src = `api/get/image/${imageToView.size}/${imageToView.id}${FILE_EXT}`;

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
    <div className="overlay">
      <div className="flex absolute top-4 left-8">
        <ColorPalette />
        <a
          className="h-6 w-8 text-blue-100 hover:text-blue-200"
          href={src}
          download
          title="download image"
        >
          <DownloadIcon />
        </a>
      </div>
      <div className="flex-center absolute overflow-auto top-12 left-8 bottom-4 right-8 bg-blue-900 rounded">
        <img className="rounded" src={src} alt={imageToView.name} />
      </div>
      <div
        className="absolute top-4 right-8 text-blue-100 hover:text-blue-200"
        title="close"
        onClick={() => setImageToView(null)}
      >
        <CloseIcon />
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      className="h-4 w-4 fill-current cursor-pointer"
      viewBox="0 0 329.26933 329"
    >
      <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
    </svg>
  );
};

const DownloadIcon = () => {
  return (
    <svg
      className="h-6 w-8 fill-current cursor-pointer"
      viewBox="0 0 511.648 511.648"
    >
      <g>
        <path d="m402.824 92.235h-9.076c-12.079-25.581-30.631-47.466-54.11-63.713-26.967-18.659-58.614-28.522-91.519-28.522-42.521 0-82.627 16.424-112.93 46.246-26.729 26.306-43.164 60.4-47.139 97.231h-4.848c-40.764 0-73.928 33.164-73.928 73.928s33.164 73.928 73.928 73.928h98.533v52.943h-63.243l137.331 167.372 137.331-167.372h-63.243v-52.943h72.912c54.892 0 99.549-44.657 99.549-99.549.001-54.891-44.656-99.549-99.548-99.549zm-73.091 282.041-73.909 90.077-73.909-90.077h29.821v-156.609h88.176v156.609zm-147.997-186.609v73.666h-98.533c-24.222 0-43.928-19.706-43.928-43.928s19.706-43.928 43.928-43.928h33.674l.252-14.744c.59-34.513 14.478-66.869 39.105-91.105 24.654-24.265 57.286-37.628 91.885-37.628 26.777 0 52.52 8.02 74.448 23.192 21.441 14.837 37.833 35.436 47.4 59.571l3.755 9.472h29.102c38.35 0 69.549 31.2 69.549 69.549s-31.199 69.549-69.549 69.549h-72.912v-73.666z" />
      </g>
    </svg>
  );
};

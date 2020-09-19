import React from "react";
import { useAppContext } from "../context";

const handleColorClick = (e) => {
  const { color } = e.target.dataset;
  navigator && navigator.clipboard.writeText(color);
};

export default function ColorPalette() {
  const { imageToView } = useAppContext();

  return (
    <React.Fragment>
      {imageToView?.colors.map((color) => {
        return (
          <div
            className="h-6 w-8 rounded mr-1 cursor-pointer"
            key={color}
            style={{ backgroundColor: `${color}` }}
            title={`copy ${color} to clipboard`}
            data-color={color}
            onClick={handleColorClick}
          />
        );
      })}
    </React.Fragment>
  );
}

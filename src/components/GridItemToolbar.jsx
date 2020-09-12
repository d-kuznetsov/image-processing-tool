import React from "react";
import PropTypes from "prop-types";

import { IMAGE_SIZES_TO_VIEW } from "../constants";
import { useAppContext } from "../context";

export default function GridItemToolbar({ id }) {
  const { setImageToView } = useAppContext();
  const handleClick = (e) => {
    const { imgId, imgSize } = e.target.dataset;
    if (imgId && imgSize) {
      setImageToView({
        id: imgId,
        size: imgSize,
      });
    }
  };

  return (
    <ul
      onClick={handleClick}
      className="absolute hidden group-hover:flex flex-col top-4 right-4"
    >
      {IMAGE_SIZES_TO_VIEW.map((size) => {
        return (
          <li
            key={size}
            className="flex-center border-solid border-2 border-blue-400 hover:border-blue-700 rounded-md w-8 h-8 bg-blue-100 hover:bg-blue-400 mb-1 font-bold"
            data-img-id={id}
            data-img-size={size}
          >
            {size}
          </li>
        );
      })}
    </ul>
  );
}

GridItemToolbar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

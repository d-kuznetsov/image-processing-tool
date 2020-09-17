import React from "react";
import PropTypes from "prop-types";

import { IMAGE_SIZES_TO_VIEW } from "../constants";
import { useAppContext } from "../context";
import clientApi from "../clientApi";

export default function GridItemToolbar({ id }) {
  const { setImageToView, setImages, setIsLoading } = useAppContext();
  const handleClick = async (e) => {
    const { size, remove } = e.target.dataset;
    if (id && size) {
      setImageToView({
        id,
        size,
      });
      return;
    }
    if (remove && confirm("Are you sure you want to delete the image?")) {
      try {
        setIsLoading(true);
        await clientApi.removeImage(id);
        const res = await clientApi.fetchImages();
        setImages(res.data);
      } catch (err) {
        alert("An error occurred while deleting the image");
      } finally {
        setIsLoading(false);
      }
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
            className="flex-center text-blue-700 border-solid border-2 border-blue-400 hover:border-blue-700 rounded-md w-8 h-8 bg-blue-100 hover:bg-blue-400 mb-1 font-bold"
            data-size={size}
          >
            {size}
          </li>
        );
      })}
      <li
        key="remove"
        className="flex-center text-red-700 border-solid border-2 border-red-400 hover:border-red-700 rounded-md w-8 h-8 bg-red-100 hover:bg-red-400 mb-1 font-bold"
        data-remove
      >
        X
      </li>
    </ul>
  );
}

GridItemToolbar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

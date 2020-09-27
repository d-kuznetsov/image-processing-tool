import React from "react";
import PropTypes from "prop-types";

import {
  IMAGE_SIZE_TO_PREVIEW as IMG_SIZE,
  FILE_EXT,
  IMAGE_TYPES,
} from "../constants";
import { useAppContext } from "../context";
import GridItemToolbar from "./GridItemToolbar";

const { maxWidth: imgWidht, maxHeight: imgHeight } = IMAGE_TYPES[IMG_SIZE];

export default function Grid({ initialItems }) {
  const { images: items } = useAppContext();

  return (
    <div className="flex flex-wrap justify-center">
      {(items || initialItems).map(({ id, name }) => {
        return (
          <article
            key={id}
            className="group relative flex-center p-4 border-solid border-2 border-transparent hover:border-blue-400 hover:bg-blue-100 rounded-md cursor-pointer"
          >
            <img
              className="rounded-md bg-blue-100"
              src={`api/get/image/${IMG_SIZE}/${id}${FILE_EXT}`}
              style={{ width: imgWidht, height: imgHeight }}
              alt={name}
            />
            <GridItemToolbar id={id} />
          </article>
        );
      })}
    </div>
  );
}

Grid.propTypes = {
  initialItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

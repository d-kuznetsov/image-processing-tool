export const FILE_EXT = ".jpeg";

export const IMAGE_SIZES_TO_VIEW = ["S", "M", "L"];
export const IMAGE_SIZE_TO_PREVIEW = "XS";

export const DIR_FOR_UPLOAD = "upload/";
export const ORIGINAL_IMAGES_DIR = `${DIR_FOR_UPLOAD}original/`;
export const PREVIEW_IMAGES_DIR = `${DIR_FOR_UPLOAD}${IMAGE_SIZE_TO_PREVIEW}`;

export const IMAGE_TYPES = {
  XS: {
    dir: `${DIR_FOR_UPLOAD}XS/`,
    maxWidth: 200,
    maxHeight: 200,
    isSquare: true,
  },
  S: {
    dir: `${DIR_FOR_UPLOAD}S/`,
    maxWidth: 400,
    maxHeight: 400,
    isSquare: false,
  },
  M: {
    dir: `${DIR_FOR_UPLOAD}M/`,
    maxWidth: 700,
    maxHeight: 700,
    isSquare: false,
  },
  L: {
    dir: `${DIR_FOR_UPLOAD}L/`,
    maxWidth: 900,
    maxHeight: 900,
    isSquare: false,
  },
};

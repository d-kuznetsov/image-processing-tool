export const FILE_MAX_SIZE = 1024 * 1024 * 5;

export const IMAGE_SIZES_TO_VIEW = ["S", "M", "L"];

export const IMAGE_SIZE_TO_PREVIEW = "XS";

export const UPLOADED_DIR = "src/upload/";

export const ORIGINAL_IMAGES_DIR = `${UPLOADED_DIR}original/`;

export const PREVIEW_IMAGES_DIR = `${UPLOADED_DIR}${IMAGE_SIZE_TO_PREVIEW}`;

export const COLORS_DIR = `${UPLOADED_DIR}colors/`;

export const FILE_EXT = "png";

export const IMAGE_CONFIG = {
  XS: {
    dir: `${UPLOADED_DIR}XS/`,
    maxWidth: 200,
    maxHeight: 200,
    isSquare: true,
  },
  S: {
    dir: `${UPLOADED_DIR}S/`,
    maxWidth: 400,
    maxHeight: 400,
    isSquare: false,
  },
  M: {
    dir: `${UPLOADED_DIR}M/`,
    maxWidth: 700,
    maxHeight: 700,
    isSquare: false,
  },
  L: {
    dir: `${UPLOADED_DIR}L/`,
    maxWidth: 900,
    maxHeight: 900,
    isSquare: false,
  },
};

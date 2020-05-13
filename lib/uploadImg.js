import multer, { diskStorage } from "multer";
import { FILE_MAX_SIZE, ORIGINAL_IMAGES_DIR } from "../config";
const formatDate = require("dateformat");

function generateFilename(file) {
  return `${formatDate(new Date(), "yyyy-mm-dd-hh-MM-ss")}-${file.originalname}`;
}

const storage = diskStorage({
  destination: ORIGINAL_IMAGES_DIR,
  filename(req, file, cb) {
    cb(null, generateFilename(file));
  },
});

const uploadImg = multer({
  storage,
  limits: { fileSize: FILE_MAX_SIZE },
  fileFilter(req, file, cb) {
    cb(null, /^image\//.test(file.mimetype));
  },
});

export default uploadImg;

import { parse } from "path";
import multer, { diskStorage } from "multer";
import { ORIGINAL_IMAGES_DIR } from "../constants";
import shortId from "shortid";

const FILE_MAX_SIZE = 1024 * 1024 * 5;

const storage = diskStorage({
  destination: ORIGINAL_IMAGES_DIR,
  filename(_, file, cb) {
    cb(null, `${shortId.generate()}${parse(file.originalname).ext}`);
  },
});

const uploadImg = multer({
  storage,
  limits: { fileSize: FILE_MAX_SIZE },
  fileFilter(_, file, cb) {
    cb(null, /^image\//.test(file.mimetype));
  },
});

export default uploadImg;

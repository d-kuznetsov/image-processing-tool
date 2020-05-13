import fs from "fs";
import path from "path";
import { PREVIEW_IMAGES_DIR } from "../config";

function filter(filename) {
  return !(/\.gitkeep$/.test(filename));
}

export default function getImgData() {
  const dir = path.join(process.cwd(), PREVIEW_IMAGES_DIR);
  const filenames = fs.readdirSync(dir);
  const data = filenames
    .filter(filter)
    .sort()
    .map(filename => ({ imgId: filename }));
  return data;
}

const getColors = require("get-image-colors");
import path from "path";
import fs from 'fs';
import { ORIGINAL_IMAGES_DIR, COLORS_DIR } from "../config"

export default async function getImgColors(filename) {
  try {
    const colors = await getColors(path.join(process.cwd(), ORIGINAL_IMAGES_DIR, filename));
    const baseFilename = path.parse(filename).name;
    const colorJson = JSON.stringify(colors.map(color => color.hex()));
    fs.writeFileSync(`${COLORS_DIR}${baseFilename}.json`, colorJson);
  } catch (err) {
    console.log(err);
  }
}

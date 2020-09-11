import sharp from "sharp";
import { IMAGE_TYPES, FILE_EXT } from "../constants";

async function createScaledImg(params) {
  try {
    const {
      path,
      dir,
      baseFilename,
      maxWidth = 400,
      maxHeight = maxWidth,
      isSquare = false,
    } = params;
    let imgSharp = await sharp(path);
    const metadata = await imgSharp.metadata();
    let { width, height } = metadata;
    if (width > maxWidth || height > maxHeight) {
      if (isSquare) {
        let extractCfg;
        if (width > height) {
          extractCfg = {
            width: height,
            height: height,
            top: 0,
            left: Math.floor((width - height) / 2),
          };
          width = height;
        } else {
          extractCfg = {
            width: width,
            height: width,
            top: Math.floor((height - width) / 2),
            left: 0,
          };
          height = width;
        }
        imgSharp = imgSharp.extract(extractCfg);
      }
      const resizeCfg =
        width / maxWidth > height / maxHeight
          ? { width: maxWidth }
          : { height: maxWidth };
      imgSharp = imgSharp.resize(resizeCfg);
    }
    await imgSharp.toFile(`${dir}${baseFilename}.${FILE_EXT}`);
  } catch (err) {
    console.log(err);
  }
}

export default async function createScaledImgs(path, baseFilename) {
  const parallels = Object.keys(IMAGE_TYPES).map((key) => {
    return createScaledImg({
      path,
      baseFilename,
      dir: IMAGE_TYPES[key].dir,
      maxWidth: IMAGE_TYPES[key].maxWidth,
      maxHeight: IMAGE_TYPES[key].maxHeight,
      isSquare: IMAGE_TYPES[key].isSquare,
    });
  });
  return Promise.all(parallels);
}

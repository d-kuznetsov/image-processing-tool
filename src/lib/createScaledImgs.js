import sharp from "sharp";
import { IMAGE_TYPES, FILE_EXT } from "../constants";

async function createScaledImg(params) {
  const { originalImgPath, dir, name, maxWidth, maxHeight, isSquare } = params;
  let imgSharp = await sharp(originalImgPath);
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
        : { height: maxHeight };
    imgSharp = imgSharp.resize(resizeCfg);
  }
  await imgSharp.jpeg({ quality: 75 }).toFile(`${dir}${name}${FILE_EXT}`);
}

export default async function createScaledImgs(originalImgPath, name) {
  const parallels = Object.entries(IMAGE_TYPES).map(
    ([_, { dir, maxHeight, maxWidth, isSquare }]) => {
      return createScaledImg({
        originalImgPath,
        name,
        dir,
        maxWidth,
        maxHeight,
        isSquare,
      });
    }
  );
  return Promise.all(parallels);
}

import sharp from "sharp";
import { IMAGE_TYPES, FILE_EXT } from "../constants";

async function createScaledImg(params) {
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
        : { height: maxHeight };
    imgSharp = imgSharp.resize(resizeCfg);
  }
  await imgSharp
    .jpeg({ quality: 75 })
    .toFile(`${dir}${baseFilename}${FILE_EXT}`);
}

export default async function createScaledImgs(path, baseFilename) {
  const parallels = Object.entries(IMAGE_TYPES).map(
    ([_, { dir, maxHeight, maxWidth, isSquare }]) => {
      return createScaledImg({
        path,
        baseFilename,
        dir,
        maxWidth,
        maxHeight,
        isSquare,
      });
    }
  );
  return Promise.all(parallels);
}

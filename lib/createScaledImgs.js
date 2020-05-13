import sharp from "sharp";
import { parse } from "path";
import { IMAGE_CONFIG, CREATED_FILE_EXTENTION } from '../config';

async function createScaledImg(params) {
    try {
      const { path, dir, filename, maxWidth = 400, maxHeight = maxWidth, isSquare = false } = params;
      const baseFilename = parse(filename).name;
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
              left: Math.floor((width - height) / 2) 
            };
            width = height;
          } else {
            extractCfg = { 
              width: width,
              height: width,
              top: Math.floor((height - width) / 2),
              left: 0
            };
            height = width;
          }
          imgSharp = imgSharp.extract(extractCfg);
        }
        const resizeCfg = width / maxWidth > height / maxHeight ? { width: maxWidth } : { height: maxWidth };
        imgSharp = imgSharp.resize(resizeCfg);
      }
      await imgSharp.toFile(`${dir}${baseFilename}.${CREATED_FILE_EXTENTION}`);
    } catch (err) {
      console.log(err);
    }
  }
  
  export default async function createScaledImgs(path, filename) {
    const parallels = Object.keys(IMAGE_CONFIG).map((key) => {
      return createScaledImg({
        path,
        filename,
        dir: IMAGE_CONFIG[key].dir,
        maxWidth: IMAGE_CONFIG[key].maxWidth,
        maxHeight: IMAGE_CONFIG[key].maxHeight,
        isSquare: IMAGE_CONFIG[key].isSquare,
      });
    });
    return Promise.all(parallels);
  }
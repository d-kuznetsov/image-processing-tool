import { parse } from "path";
import uploadImg from "../../../lib/uploadImg";
import runMiddleware from "../../../lib/runMiddleware";
import getMainColors from "../../../lib/getMainColors";
import { getDataSource } from "../../../dataSource";
import createScaledImgs from "../../../lib/createScaledImgs";

export default async (req, res) => {
  try {
    await runMiddleware(req, res, uploadImg.single("image"));
    const {
      originalname: originalBasename,
      filename: basename,
      path,
    } = req.file;
    const { name, ext } = parse(basename);
    const scaledImgsData = await createScaledImgs(path, name);
    const colors = await getMainColors(path);
    const dataSource = await getDataSource();
    const imgData = {
      id: name,
      name: parse(originalBasename).name,
      date: new Date().toISOString(),
      original: {
        ext,
      },
      scaled: scaledImgsData,
      colors,
    };
    await dataSource.get("images").push(imgData).write();
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

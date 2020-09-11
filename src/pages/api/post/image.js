import { parse } from "path";
import uploadImg from "../../../lib/uploadImg";
import runMiddleware from "../../../lib/runMiddleware";
import getMainColors from "../../../lib/getMainColors";
import { getDataSource } from "../../../dataSource";
import createScaledImgs from "../../../lib/createScaledImgs";

export default async (req, res) => {
  try {
    await runMiddleware(req, res, uploadImg.single("image"));
    const { originalname, path, filename } = req.file;
    const baseFilename = parse(filename).name;
    await createScaledImgs(path, baseFilename);
    const colors = await getMainColors(path);
    const dataSource = await getDataSource();
    const imgData = {
      id: baseFilename,
      originalName: originalname,
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

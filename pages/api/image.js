import { parse } from "path";
const getColors = require("get-image-colors");
import uploadImg from "../../lib/uploadImg";
import runMiddleware from "../../lib/runMiddleware";
import { getDataSource } from "../../dataSource";
import createScaledImgs from "../../lib/createScaledImgs";

export default async (req, res) => {
  try {
    await runMiddleware(req, res, uploadImg.single("image"));
    const dataSource = await getDataSource();
    const { originalname, path, filename } = req.file;
    const baseFilename = parse(filename).name;
    await createScaledImgs(path, baseFilename);
    const colors = await getColors(path);
    const imgData = {
      id: baseFilename,
      originalName: originalname,
      colors: colors.map((color) => color.hex()),
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

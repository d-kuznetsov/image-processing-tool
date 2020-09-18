import { unlink } from "fs";
import { join } from "path";
import { getDataSource } from "../../../dataSource";
import { ORIGINAL_IMAGES_DIR, IMAGE_TYPES, FILE_EXT } from "../../../constants";

export default async (req, res) => {
  try {
    const { id } = req.body;
    const dataSource = await getDataSource();
    const imgData = dataSource.get("images").find({ id }).value();
    if (imgData) {
      await dataSource.get("images").remove({ id }).write();
      res.status(200).json(imgData);
      unlink(
        join(
          process.cwd(),
          ORIGINAL_IMAGES_DIR,
          `${imgData.id}${imgData.original.ext}`
        ),
        (err) => {
          err && console.log(err);
        }
      );
      Object.entries(IMAGE_TYPES).forEach(([_, { dir }]) => {
        unlink(join(process.cwd(), dir, `${imgData.id}${FILE_EXT}`), (err) => {
          err && console.log(err);
        });
      });
    } else {
      res.status(200).end("removed");
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

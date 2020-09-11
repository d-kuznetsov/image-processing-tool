import { join } from "path";
import serveHandler from "serve-handler";
import { DIR_TO_UPLOAD } from "../../../../constants";

const API_PREFIX = "/api/get/image";

export default async (req, res) => {
  req.url = req.url.replace(API_PREFIX, "");
  await serveHandler(req, res, {
    public: join(process.cwd(), DIR_TO_UPLOAD),
  });
};

/*
import fs from "fs";
import path from "path";
import { DIR_TO_UPLOAD } from "../../../constants";

export default (req, res) => {
  const [size, filename] = req.query.params;
  const filePath = path.join(process.cwd(), DIR_TO_UPLOAD, size, filename);
  if (!fs.existsSync(filePath)) {
    console.log(filePath + "not found");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
    return;
  }
  res.writeHead(200, { "Content-Type": "image/*" });
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};
*/

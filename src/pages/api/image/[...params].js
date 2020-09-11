import { join } from "path";
import serveHandler from "serve-handler";
import { UPLOADED_DIR } from "../../../constants";

const API_PREFIX = "/api/image";

export default async (req, res) => {
  req.url = req.url.replace(API_PREFIX, "");
  await serveHandler(req, res, {
    public: join(process.cwd(), UPLOADED_DIR),
  });
};

/*
import fs from "fs";
import path from "path";
import { UPLOADED_DIR } from "../../../constants";

export default (req, res) => {
  const [size, filename] = req.query.params;
  const filePath = path.join(process.cwd(), UPLOADED_DIR, size, filename);
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

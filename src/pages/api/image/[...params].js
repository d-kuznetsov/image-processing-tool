import fs from "fs";
import path from "path";
import { UPLOADED_DIR } from '../../../config'

export default (req, res) => {
    const [size, filename] = req.query.params;
    const filePath = path.join(process.cwd(), UPLOADED_DIR, size, filename);
    if (!fs.existsSync(filePath)) {
        console.log(filePath + 'not found');
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('404 Not Found');
        res.end();
        return;
      }
    res.writeHead(200, { 'Content-Type': 'image/*' });
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
}
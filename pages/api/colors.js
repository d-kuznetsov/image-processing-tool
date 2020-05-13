import { readFileSync } from "fs";
import { parse } from "path";
import { COLORS_DIR } from "../../config"

export default async function (req, res) {
    try {
        const { query: { src } } = req;
        const baseFilename = parse(src).name;
        const colorJson = readFileSync(COLORS_DIR + baseFilename + '.json');
        res.status(200).json(JSON.parse(colorJson));
    } catch (err) {
        console.log(err);
        res.status(500).end();
      }
}
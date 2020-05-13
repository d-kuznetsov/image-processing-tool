import uploadImg from '../../lib/uploadImg';
import runMiddleware from '../../lib/runMiddleware';
import createScaledImgs from '../../lib/createScaledImgs';
import extractImgColors from '../../lib/extractImgColors';

export default async (req, res) => {
  try {
    await runMiddleware(req, res, uploadImg.single('image'));
    const { path, filename } = req.file;
    await createScaledImgs(path, filename);
    res.status(200).json({filename});
    extractImgColors(filename);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
}

export const config = {
  api: {
    bodyParser: false,
  }
}
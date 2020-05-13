import getImgData from '../../lib/getImgData';

export default async (req, res) => {
  try {
    const data = getImgData();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

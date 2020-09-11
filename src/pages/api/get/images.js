import { getDataSource } from "../../../dataSource";

export default async (req, res) => {
  try {
    const dataSource = await getDataSource();
    res.status(200).json(dataSource.getState()["images"]);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

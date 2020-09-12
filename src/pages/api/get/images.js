import { getDataSource } from "../../../dataSource";

export default async (req, res) => {
  try {
    let { sort, order, limit, page = 1 } = req.query;
    const dataSource = await getDataSource();
    let imgListWrap = dataSource.get("images");

    if (sort) {
      switch (sort) {
        case "random":
          imgListWrap = imgListWrap.shuffle();
          break;
        case "color":
          imgListWrap = imgListWrap.sortBy((item) => item.colors[0]);
          break;
        default:
          imgListWrap = imgListWrap.sortBy(sort);
      }
    }

    if (order === "desc") {
      imgListWrap = imgListWrap.reverse();
    }

    if (limit) {
      imgListWrap = imgListWrap.slice((page - 1) * limit, page * limit);
    }

    res.status(200).json(imgListWrap.value());
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

import { getDataSource } from "../../../dataSource";
import { FILE_EXT } from "../../../constants";

const apiPrefix = "/api/get/image/";

const mapImageList = (listWrap, isShort) => {
  if (isShort) {
    return listWrap
      .value()
      .map(({ id, name, colors }) => ({ id, name, colors }));
  } else {
    return listWrap.value().map((data) => {
      const { id, original, scaled } = data;
      return {
        ...data,
        original: {
          src: `${apiPrefix}original/${id}${original.ext}`,
        },
        scaled: scaled.map((data) => {
          return {
            ...data,
            src: `${apiPrefix}${data.size}/${id}${FILE_EXT}`,
          };
        }),
      };
    });
  }
};

export default async (req, res) => {
  try {
    let { sort, order, limit, page = 1, short } = req.query;
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
    res.status(200).json(mapImageList(imgListWrap, short));
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
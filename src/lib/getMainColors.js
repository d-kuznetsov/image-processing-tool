const getColors = require("get-image-colors");

export default async function getMainColors(path) {
  const colors = await getColors(path);
  return colors.map((color) => color.hex());
}

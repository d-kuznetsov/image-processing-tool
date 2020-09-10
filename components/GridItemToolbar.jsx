import { IMAGE_SIZES_TO_VIEW, FILE_EXT } from "../config";

export default function GridItemToolbar({ id }) {
  return (
    <ul className="absolute hidden group-hover:flex flex-col top-4 right-4">
      {IMAGE_SIZES_TO_VIEW.map((size) => {
        return (
          <li
            key={size}
            className="flex-center border-solid border-2 border-blue-400 hover:border-blue-700 rounded-md w-8 h-8 bg-blue-100 hover:bg-blue-400 mb-1 font-bold"
            data-src-to-view={`api/image/${size}/${id}.${FILE_EXT}`}
          >
            {size}
          </li>
        );
      })}
    </ul>
  );
}

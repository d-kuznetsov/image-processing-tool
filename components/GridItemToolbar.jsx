import { IMAGE_SIZES_TO_VIEW } from "../config";

export default function GridItemToolbar({ imgId }) {
  return (
    <ul className="GridItemToolbar">
      {IMAGE_SIZES_TO_VIEW.map((size) => {
        return (
          <li
            key={size}
            className="GridItemToolbar-item"
            data-src-to-view={`api/image/${size}/${imgId}`}
          >
            {size}
          </li>
        );
      })}
    </ul>
  );
}

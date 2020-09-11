import { IMAGE_SIZE_TO_PREVIEW, FILE_EXT } from "../constants";
import { useAppContext } from "../context";
import GridItemToolbar from "./GridItemToolbar";

function Grid({ initialItems }) {
  const { images: items } = useAppContext();

  return (
    <div className="flex flex-wrap justify-center">
      {(items || initialItems).map(({ id }) => {
        return (
          <article
            key={id}
            className="group relative flex-center p-4 border-solid border-2 border-transparent hover:border-blue-400 hover:bg-blue-100 rounded-md cursor-pointer"
          >
            <img
              className="rounded-md"
              src={`api/get/image/${IMAGE_SIZE_TO_PREVIEW}/${id}.${FILE_EXT}`}
            />
            <GridItemToolbar id={id} />
          </article>
        );
      })}
    </div>
  );
}

export default Grid;

import { IMAGE_SIZE_TO_PREVIEW } from "../config";
import { useAppContext } from "../context";
import GridItemToolbar from "./GridItemToolbar";

function Grid({ initialItems }) {
  const { images: items, setImageToView } = useAppContext();
  const handleClick = (e) => {
    const { srcToView } = e.target.dataset;
    if (srcToView) {
      setImageToView({
        src: srcToView,
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-center" onClick={handleClick}>
      {(items || initialItems).map(({ imgId }) => {
        return (
          <article
            key={imgId}
            className="group relative flex-center p-4 border-solid border-2 border-transparent hover:border-blue-400 hover:bg-blue-100 rounded-md cursor-pointer"
          >
            <img
              className="rounded-md"
              src={`api/image/${IMAGE_SIZE_TO_PREVIEW}/${imgId}`}
            />
            <GridItemToolbar imgId={imgId} />
          </article>
        );
      })}
    </div>
  );
}

export default Grid;

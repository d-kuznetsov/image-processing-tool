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
    <div className="Grid" onClick={handleClick}>
      {(items || initialItems).map(({ imgId }) => {
        return (
          <article key={imgId} className="Grid-item">
            <img
              className="Grid-image"
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

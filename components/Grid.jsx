import { IMAGE_SIZES_TO_VIEW, IMAGE_SIZE_TO_PREVIEW } from "../config";

function Grid(props) {
  const { items, setImgSrc } = props;
  const handleClick = (e) => {
    const { srcToView } = e.target.dataset;
    srcToView && setImgSrc(srcToView);
  };
  return (
    <div className="Grid" onClick={handleClick}>
      {items.map(({ imgId }) => {
        return (
          <article key={imgId} className="Grid-item">
            <img className="Grid-image" src={`api/image/${IMAGE_SIZE_TO_PREVIEW}/${imgId}`}/>
            <ul className="Grid-toolbar">
              {IMAGE_SIZES_TO_VIEW.map((size) => {
                return (
                  <li
                    className="Grid-toolbarItem"
                    key={size}
                    data-src-to-view={`api/image/${size}/${imgId}`}
                  >
                    {size}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export default Grid;

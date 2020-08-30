import { useState, useEffect } from "react";
import { useAppContext } from "../context";
import axious from "axios";

function Viewer() {
  const [colors, setColors] = useState([]);
  const { imageToView, setImageToView } = useAppContext();

  useEffect(() => {
    axious
      .get("api/colors", {
        params: { src: imageToView.src },
      })
      .then((res) => {
        setColors(res.data);
      });
  }, [0]);

  return (
    <div className="Viewer">
      <ul className="Viewer-colors">
        {colors.map((color) => (
          <li
            className="Viewer-color"
            key={color}
            style={{ backgroundColor: `${color}` }}
          />
        ))}
      </ul>
      <div className="Viewer-content">
        <img className="Viewer-image" src={imageToView.src} />
      </div>
      <button
        className="Viewer-close"
        onClick={() => {
          setImageToView(null);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Viewer;

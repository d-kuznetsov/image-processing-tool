import { useState, useEffect } from 'react';
import axious from "axios";

function Viewer(props) {
  const { src, onClose } = props;
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axious.get('api/colors', {
      params: { src }
    }).then(res => {
      setColors(res.data)
    });
  }, [0]);

  return (
    <div className="Viewer">
      <ul className="Viewer-colors">
        {colors.map((color) => (
          <li className="Viewer-color" key={color} style={{ backgroundColor: `${color}` }}/>
        ))}
      </ul>
      <div className="Viewer-content">
        <img className="Viewer-image" src={src} />
      </div>
      <button className="Viewer-close" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default Viewer;

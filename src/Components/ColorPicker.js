import { useState } from "react";

function ColorPicker(props) {
  const [display, setDisplay] = useState(false);
  const [background, setBackground] = useState("pink");

  const handleClick = () => {
    setDisplay(true);
  };

  const fillColor = (color) => {
    setBackground(color);
    setDisplay(false);
  };

  return (
    <div className="container" style={{ backgroundColor: background }}>
      
      <div className="colorRow">
        {display &&
          props.colors.map((color, index) => (
            <div
              key={index}
              className="colorSquare"
              style={{ backgroundColor: color }}
              onClick={() => {
                fillColor(color);
              }}
            ></div>
          ))}
        {!display &&
          Array(props.colors.length)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="colorempty"></div>
            ))}
      </div>
      <button onClick={handleClick}> Pick a color</button>
    </div>
  );
}

export default ColorPicker;

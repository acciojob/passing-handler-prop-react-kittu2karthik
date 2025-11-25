import React, { useState } from "react";

const Selection = ({ applyColor, "data-testid": testid }) => {
  const [style, setStyle] = useState({ background: "" });

  const handleClick = () => {
    applyColor(setStyle);
  };

  return (
    <div
      onClick={handleClick}
      className="fix-box"          
      style={style}
      data-testid={testid}         
    >
      Selection
    </div>
  );
};

export default Selection;
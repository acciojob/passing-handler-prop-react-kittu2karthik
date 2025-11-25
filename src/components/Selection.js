import React, { useState } from "react";

function Selection({ applyColor }) {
  const [style, setStyle] = useState({ background: "" });

  function handleColor() {
    applyColor(setStyle);
  }

  return (
    <div onClick={handleColor} style={style}>
      Selection
    </div>
  );
}

export default Selection;

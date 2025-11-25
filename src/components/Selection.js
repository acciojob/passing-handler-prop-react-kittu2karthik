import React, { useState } from "react";

function Selection({ applyColor, "data-testid": testid }) {
  const [style, setStyle] = useState({ background: "" });

  function handleColor() {
    applyColor(setStyle);
  }

  return (
    <div onClick={handleColor} style={style} data-testid={testid}>
      Selection
    </div>
  );
}

export default Selection;

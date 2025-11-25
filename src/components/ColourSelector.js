import React from "react";
import ColourSelector from "./ColourSelector";

const ColourSelectorContainer = (props) => {
  const { applyColor } = props;

  const colourConfig = [
    {
      key: "selection1",
      label: "Selection 1",
      background: "red",
      classname: "red-button",
    },
    {
      key: "selection2",
      label: "Selection 2",
      background: "green",
      classname: "green-button",
    },
    {
      key: "selection3",
      label: "Selection 3",
      background: "blue",
      classname: "blue-button",
    },
  ];

  return (
    <div>
      {colourConfig.map((config) => (
        <ColourSelector
          key={config.key}
          config={config}
          selectNextBackground={applyColor}
        />
      ))}
    </div>
  );
};

export default ColourSelectorContainer;

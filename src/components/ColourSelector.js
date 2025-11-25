import React from "react";

const ColourSelector = ({ config, selectNextBackground }) => {
  const handleClick = () => {
    selectNextBackground({ background: config.background });
  };

  return (
    <button
      className={config.classname}
      onClick={handleClick}
      data-testid={config.key}        
    >
      {config.label}
    </button>
  );
};

export default ColourSelector;
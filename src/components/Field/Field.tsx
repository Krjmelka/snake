import React from "react";
// import {generateGridData} from "../../utils/grid.util";
import {Snake} from "../Snake/Snake";

import "./Field.scss";
import {useSnakeMove} from "../../hooks/useSnakeMove";

const gridSize = 30;
const fieldSize = 600;

// const grid = generateGridData(gridSize);

export const Field = () => {
  const {snakePosition} = useSnakeMove({gridSize});
  return (
    <div className="field-svg">
      <svg viewBox={`0 0 ${fieldSize} ${fieldSize}`}>
        <Snake
          width={fieldSize / gridSize}
          height={fieldSize / gridSize}
          transform={`translate(${
            (snakePosition.x - 1) * (fieldSize / gridSize)
          }, ${(snakePosition.y - 1) * (fieldSize / gridSize)})`}
        />
      </svg>
    </div>
  );
};

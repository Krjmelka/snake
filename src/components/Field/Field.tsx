import React, {useCallback, useEffect, useState} from "react";
// import {generateGridData} from "../../utils/grid.util";
import {Snake} from "../Snake/Snake";

import "./Field.scss";
import {useSnakeMove} from "../../hooks/useSnakeMove";
import {Target} from "../Target/Target";
import {TPosition} from "./types";
import {generateRandomTargetPosition} from "../../utils/target.util";

const COLUMNS_COUNT = 20;
const FIELD_SIZE = 600;

// const grid = generateGridData(COLUMNS_COUNT);

export const Field = () => {
  const [targetPosition, setTargetPosition] = useState<TPosition | null>(null);
  const {snakePosition} = useSnakeMove({
    gridSize: COLUMNS_COUNT,
    targetPosition,
  });

  const generateTarget = useCallback(() => {
    setTargetPosition(
      generateRandomTargetPosition(snakePosition, COLUMNS_COUNT)
    );
  }, [snakePosition]);

  useEffect(() => {
    generateTarget();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      targetPosition &&
      snakePosition.some(
        (snakeCell) =>
          snakeCell.x === targetPosition.x && snakeCell.y === targetPosition.y
      )
    ) {
      generateTarget();
    }
  }, [snakePosition, targetPosition, generateTarget]);

  return (
    <div className="field-svg">
      <svg viewBox={`0 0 ${FIELD_SIZE} ${FIELD_SIZE}`}>
        {snakePosition.map((snakeCell) => (
          <Snake
            key={`${snakeCell.x}-${snakeCell.y}`}
            width={FIELD_SIZE / COLUMNS_COUNT}
            height={FIELD_SIZE / COLUMNS_COUNT}
            transform={`translate(${
              (snakeCell.x - 1) * (FIELD_SIZE / COLUMNS_COUNT)
            }, ${(snakeCell.y - 1) * (FIELD_SIZE / COLUMNS_COUNT)})`}
          />
        ))}
        {targetPosition && (
          <Target
            width={FIELD_SIZE / COLUMNS_COUNT}
            height={FIELD_SIZE / COLUMNS_COUNT}
            className="target"
            transform={`translate(${
              (targetPosition.x - 1) * (FIELD_SIZE / COLUMNS_COUNT)
            }, ${(targetPosition.y - 1) * (FIELD_SIZE / COLUMNS_COUNT)})`}
          />
        )}
      </svg>
    </div>
  );
};

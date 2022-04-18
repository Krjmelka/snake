import {EDirection, TSnakePosition} from "../components/Field/types";

export const calculateSnakeMove = (
  snakePosition: TSnakePosition,
  gridSize: number,
  moveDirection: EDirection
): TSnakePosition => {
  switch (moveDirection) {
    case EDirection.ArrowUp:
      if (snakePosition.y === 1) {
        return {...snakePosition};
      } else {
        return {...snakePosition, y: snakePosition.y - 1};
      }
    case EDirection.ArrowDown:
      if (snakePosition.y === gridSize) {
        return {...snakePosition};
      } else {
        return {...snakePosition, y: snakePosition.y + 1};
      }
    case EDirection.ArrowLeft:
      if (snakePosition.x === 1) {
        return {...snakePosition};
      } else {
        return {...snakePosition, x: snakePosition.x - 1};
      }
    case EDirection.ArrowRight:
      if (snakePosition.x === gridSize) {
        return {...snakePosition};
      } else {
        return {...snakePosition, x: snakePosition.x + 1};
      }
    default:
      return {...snakePosition};
  }
};

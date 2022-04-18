import {EDirection, TSnakePosition, TSnake, TPosition} from "../components/Field/types";
import _, { isEqual } from 'lodash'

export const calculateSnakeMove = (
  snakeData: TSnake,
  gridSize: number,
  moveDirection: EDirection,
  target: TPosition | null,
): TSnake => {
  const snakeHeadPosition = snakeData[snakeData.length - 1]
  switch (moveDirection) {
    case EDirection.ArrowUp:
      if (snakeHeadPosition.y === 1) {
        return [...snakeData];
      } else {
        const updatedSnakeHeadPosition = {...snakeHeadPosition, y: snakeHeadPosition.y - 1}
        if(_.some(snakeData, updatedSnakeHeadPosition)) {
          return [...snakeData]
        }
        if(target && isEqual(updatedSnakeHeadPosition, target)) {
          return [...snakeData, target]
        } 
        return updateSnakeBody(snakeData, updatedSnakeHeadPosition);
      }
    case EDirection.ArrowDown:
      if (snakeHeadPosition.y === gridSize) {
        return [...snakeData];
      } else {
        const updatedSnakeHeadPosition = {...snakeHeadPosition, y: snakeHeadPosition.y + 1}
        if(_.some(snakeData, updatedSnakeHeadPosition)) {
          return [...snakeData]
        }
        if(target && isEqual(updatedSnakeHeadPosition, target)) {
          return [...snakeData, target]
        }
        return updateSnakeBody(snakeData, updatedSnakeHeadPosition);
      }
    case EDirection.ArrowLeft:
      if (snakeHeadPosition.x === 1) {
        return [...snakeData];
      } else {
        const updatedSnakeHeadPosition = {...snakeHeadPosition, x: snakeHeadPosition.x - 1}
        if(_.some(snakeData, updatedSnakeHeadPosition)) {
          return [...snakeData]
        }
        if(target && isEqual(updatedSnakeHeadPosition, target)) {
          return [...snakeData, target]
        }
        return updateSnakeBody(snakeData, updatedSnakeHeadPosition);
      }
    case EDirection.ArrowRight:
      if (snakeHeadPosition.x === gridSize) {
        return [...snakeData];
      } else {
        const updatedSnakeHeadPosition = {...snakeHeadPosition, x: snakeHeadPosition.x + 1}
        if(_.some(snakeData, updatedSnakeHeadPosition)) {
          return [...snakeData]
        }
        if(target && isEqual(updatedSnakeHeadPosition, target)) {
          return [...snakeData, target]
        }
        return updateSnakeBody(snakeData, updatedSnakeHeadPosition);
      }
    default:
      return [...snakeData];
  }
};

const updateSnakeBody = (snakeData: TSnake, newSnakeHead: TSnakePosition) => {
  snakeData.push(newSnakeHead)
  snakeData.shift()
  return [...snakeData]
}

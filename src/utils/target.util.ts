import { TPosition, TSnake } from "../components/Field/types";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const generateRandomTargetPosition = (snakePosition: TSnake, areaCountSize: number): TPosition => {
    const target: TPosition = {x: random(1, areaCountSize), y: random(1, areaCountSize)}
    if(snakePosition.some((snakeCell) => snakeCell.x === target.x && snakeCell.y === target.y)) {
        return generateRandomTargetPosition(snakePosition, areaCountSize)
    } else {
        return target
    }
}

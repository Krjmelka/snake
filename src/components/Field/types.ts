export type TGridCell = {
    isTarget?: boolean;
    isSnakePart?: boolean;
} & TPosition

export type TPosition = {
    x: number;
    y: number;
}

export type TGrid = TGridCell[]

export type TSnakePosition = TPosition

export type TSnake = TSnakePosition[]

export enum EDirection {
    ArrowRight = 'ArrowRight',
    ArrowDown = 'ArrowDown',
    ArrowLeft = 'ArrowLeft',
    ArrowUp = 'ArrowUp',
}
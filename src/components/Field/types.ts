export type TGridCell = {
    x: number;
    y: number;
    isTarget?: boolean;
    isSnakePart?: boolean;
}

export type TGrid = TGridCell[]

export type TSnakePosition = Pick<TGridCell, 'x' | 'y'>

export enum EDirection {
    ArrowRight = 'ArrowRight',
    ArrowDown = 'ArrowDown',
    ArrowLeft = 'ArrowLeft',
    ArrowUp = 'ArrowUp',
}
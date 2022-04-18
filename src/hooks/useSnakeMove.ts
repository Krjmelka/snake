import {useCallback, useEffect, useState} from "react";
import {calculateSnakeMove} from "../utils/snake.util";
import {EDirection, TPosition, TSnake} from "../components/Field/types";

type TUseSnakeMoveProps = {
  gridSize: number;
  targetPosition: TPosition | null;
};

export const useSnakeMove = ({
  gridSize,
  targetPosition,
}: TUseSnakeMoveProps) => {
  const [snakePosition, setSnakePosition] = useState<TSnake>([
    {
      x: 1,
      y: 1,
    },
    // {
    //   x: 1,
    //   y: 2,
    // },
    // {
    //   x: 1,
    //   y: 3,
    // },
  ]);
  const [direction, setDirection] = useState<EDirection>(EDirection.ArrowDown);
  const [tick, setTick] = useState<number | null>(null);

  const handleChangePositionOnInterval = () => {
    const updatedSnakePosition = calculateSnakeMove(
      snakePosition,
      gridSize,
      direction,
      targetPosition
    );  
    setSnakePosition(updatedSnakePosition);
  };

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (Object.values(EDirection).some((code) => code === e.code)) {
      if((e.code === EDirection.ArrowDown || e.code === EDirection.ArrowUp) && (direction === EDirection.ArrowDown || direction === EDirection.ArrowUp) ) {
        return
      } else if((e.code === EDirection.ArrowLeft || e.code === EDirection.ArrowRight) && (direction === EDirection.ArrowLeft || direction === EDirection.ArrowRight) ) {
        return
      } else {
        setDirection(e.code as EDirection);
      }
    }
  }, [direction]);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    if (tick) {
      handleChangePositionOnInterval();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  useEffect(() => {
    const intervalId = window.setInterval(() => setTick(Date.now()), 300);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    snakePosition,
    setSnakePosition,
  };
};

import {useCallback, useEffect, useState} from "react";
import { calculateSnakeMove } from "../utils/snake.util";
import {EDirection, TSnakePosition} from "../components/Field/types";

type TUseSnakeMoveProps = {
  gridSize: number;
};

export const useSnakeMove = ({ gridSize}: TUseSnakeMoveProps) => {
  const [snakePosition, setSnakePosition] = useState<TSnakePosition>({
    x: 1,
    y: 1,
  });
  const [direction, setDirection] = useState<EDirection>(EDirection.ArrowDown)
  const [tick, setTick] = useState<number | null>(null)

  const handleChangePositionOnInterval = () => {
    const updatedSnakePosition = calculateSnakeMove( snakePosition, gridSize, direction )
    setSnakePosition(updatedSnakePosition)
  }

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (Object.values(EDirection).some((code) => code === e.code)) {
        setDirection( e.code as EDirection )
      }
  }, [])

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp]);

  useEffect(() => {
    handleChangePositionOnInterval()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])

  useEffect(() => {
    const intervalId = window.setInterval(() => setTick(Date.now()), 500 )
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return {
    snakePosition,
  };
};

import React from 'react'

type TSnakeProps = JSX.IntrinsicElements['rect']

export const Snake = (props: TSnakeProps) => {
  return (
    <rect {...props} />
  )
}

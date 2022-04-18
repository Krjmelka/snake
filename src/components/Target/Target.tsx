import React from 'react'

type TTargetProps = JSX.IntrinsicElements['rect']

export const Target = (props: TTargetProps) => {
  return (
    <rect {...props} />
  )
}

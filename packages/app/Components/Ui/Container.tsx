import React from 'react'
import { View } from 'app/design/view'

interface Props {
  children: any
  className?: string
}

const Container: React.FC<Props> = ({ children, className }: Props) => {
  //sm:px-24 md:px-40
  return (
    <View
      className={`container flex-1 bg-white px-2 sm:mx-auto sm:mt-4 sm:px-24 md:px-40  ${className}`}
    >
      {children}
    </View>
  )
}

export default Container

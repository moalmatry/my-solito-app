import React from 'react'
import { View } from 'app/design/view'

interface Props {
  color?: string
}

const ColoredIcon = ({ color = 'bg-red-500' }: Props) => {
  return <View className={`h-7 w-7 rounded-full p-3 ${color}`}></View>
}

export default ColoredIcon

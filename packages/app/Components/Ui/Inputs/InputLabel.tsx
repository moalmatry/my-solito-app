import { Input, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'

interface Props {
  title?: string
  inputValue?: string
}

const InputLabel: React.FC<Props> = ({ title, inputValue = '' }: Props) => {
  return (
    <View className="mt-2">
      {title && <Text className="mb-3 font-semibold text-white">{title}</Text>}
      <Input
        className=" rounded-md bg-gray-500 px-1 py-2 text-white active:outline"
        defaultValue={inputValue}
      />
    </View>
  )
}

export default InputLabel

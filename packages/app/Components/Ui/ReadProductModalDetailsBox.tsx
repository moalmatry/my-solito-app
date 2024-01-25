import React from 'react'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

interface Props {
  title: string
  description: string
}

const ReadProductModalDetailsBox = ({
  title = 'Test',
  description = 'test',
}: Props) => {
  return (
    <View className="m-2 w-[45%] rounded-md bg-gray-500 px-4 py-2 sm:w-[29%]">
      <Text className="text-lg font-[600] text-white">{title}</Text>
      <Text className="text-lg font-[200] text-gray-50">{description}</Text>
    </View>
  )
}

export default ReadProductModalDetailsBox

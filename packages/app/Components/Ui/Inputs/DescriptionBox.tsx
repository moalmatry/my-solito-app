import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'
import TextArea from './TextArea'

const DescriptionBox: React.FC = () => {
  return (
    <View>
      <View className="flex flex-row rounded-t-md bg-gray-400 px-4 py-3 sm:gap-12 ">
        <View className="flex flex-row gap-4 sm:gap-3">
          <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
            🔗
          </Text>
          <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
            📌
          </Text>
          <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
            🖼️
          </Text>
          <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
            💻
          </Text>
          <Text className="mr-2 items-center justify-center rounded-md bg-gray-500 p-0.5 sm:mr-0">
            😳
          </Text>
        </View>
        <View className=" mr-16 flex flex-row gap-2 sm:mr-6 sm:gap-3">
          <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
            📅
          </Text>
          <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
            📥
          </Text>
        </View>
        <Text className="items-center justify-center rounded-md bg-gray-500 p-0.5">
          🎞️
        </Text>
      </View>
      <TextArea className="f rounded-t-none" />
    </View>
  )
}

export default DescriptionBox

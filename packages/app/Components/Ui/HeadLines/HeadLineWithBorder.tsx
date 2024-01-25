import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'

interface Props {
  title: string
}

const HeadLineWithBorder: React.FC<Props> = ({ title }) => {
  return (
    <View className="mt-2">
      <Text className="text-md border-b border-gray-500 pb-5 font-bold text-white">
        {title}
      </Text>
    </View>
  )
}

export default HeadLineWithBorder

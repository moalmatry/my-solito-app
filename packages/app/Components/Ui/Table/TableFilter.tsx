import React from 'react'
import { CheckBox } from 'app/design/CheckBox'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

const TableFilter: React.FC = () => {
  return (
    <View className="mt-2 flex gap-2 sm:flex-row sm:items-center">
      <Text className="mr-2 font-semibold text-white">Show only:</Text>
      <View className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center ">
        <CheckBox />
        <Text className="text-white">Active Products</Text>
        <CheckBox />
        <Text className="text-white">Pending products</Text>
        <CheckBox />
        <Text className="text-white">Inactive products</Text>
      </View>
    </View>
  )
}

export default TableFilter

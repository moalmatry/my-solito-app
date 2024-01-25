import React from 'react'
import { View } from 'app/design/view'
import CheckBox from '../Inputs/CheckBox'
import { Text } from 'app/design/typography'
import { ScrollView } from 'moti'

const TableColumnHeader: React.FC = () => {
  return (
    <View className="bg-slate-500 px-4  py-6 sm:px-10 ">
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 30,
          alignItems: 'center',
        }}
        horizontal={true}
      >
        <View className="">
          <CheckBox />
        </View>
        <View className="flex-row items-center">
          <Text className="ml-1 font-bold text-gray-300">Product</Text>
        </View>

        <Text className="font-bold text-gray-300 ">BRAND</Text>
        <Text className="font-bold text-gray-300">PRICE</Text>
        <Text className="font-bold text-gray-300">STOCK</Text>
        <Text className="font-bold text-gray-300">TOTAL SALES</Text>
        <Text className="font-bold text-gray-300">CATEGORY</Text>
        <View>
          <Text className="font-bold text-gray-300">STATUS</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default TableColumnHeader

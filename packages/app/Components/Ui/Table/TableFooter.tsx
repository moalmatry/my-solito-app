import React from 'react'
import Container from '../Container'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import SmallEditButton from '../Buttons/SmallEditButton'

const TableFooter: React.FC = () => {
  return (
    <View className="rounded-b-md bg-slate-700 px-4  py-6 sm:px-10">
      <View className="flex justify-between sm:flex-row">
        <View className="mb-5 flex flex-row gap-3 sm:mb-0">
          <View>
            <Text className="text-xs text-gray-500">Purchase price</Text>
            <Text className="text-xs font-bold text-white">$ 3,567,890</Text>
          </View>
          <View>
            <Text className="text-xs text-gray-500">Total selling price</Text>
            <Text className="text-xs font-bold text-white">$ 8,567,890</Text>
          </View>
        </View>
        <View className="flex flex-col-reverse gap-4  sm:flex-row sm:items-center">
          <Text className="text-xs text-green-500">Print barcodes</Text>
          <Text className="text-xs text-green-500">Duplicate</Text>
          <SmallEditButton title="Export csv" />
        </View>
      </View>
    </View>
  )
}

export default TableFooter

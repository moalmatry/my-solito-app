import { View } from 'app/design/view'
import React from 'react'
import HeadLine from '../HeadLines/HeadLine'
import SmallOutlineButton from '../Buttons/SmallOutlineButton'
import SearchInput from '../Inputs/SearchInput'
import SmallEditButton from '../Buttons/SmallEditButton'

const TableHeader: React.FC = () => {
  return (
    <View className="border-b border-gray-500 pb-3">
      <View className="mb-5 flex flex-row items-center justify-between">
        <HeadLine title="All Products" />
        <View className="flex flex-row items-center gap-2">
          <View>
            <SmallOutlineButton title="View json" />
          </View>
          <View>
            <SmallOutlineButton title="Export" />
          </View>
        </View>
      </View>
      <View className=" justify-between sm:flex-row sm:gap-2">
        <View className="flex sm:flex-row sm:gap-2">
          <View className="mb-5 sm:mb-0">
            <SearchInput />
          </View>
          <View className="mb-5 flex flex-row justify-center sm:mb-0  sm:gap-2">
            <View className="mr-3 sm:mr-0">
              <SmallOutlineButton title="Filter" />
            </View>
            <View>
              <SmallOutlineButton title="Configuration" />
            </View>
          </View>
        </View>
        <View className="sm:mt-1">
          <SmallEditButton title="Add new Project" />
        </View>
      </View>
    </View>
  )
}

export default TableHeader
{
  /* <View className=" flex flex-row items-center">
<View className="mt-2 items-center gap-2 bg-red-950">
  <SearchInput />
  <SmallOutlineButton title="filter" />
  <SmallOutlineButton title="Configuration" />
</View>
<View className="mt-2 items-center">
  <SmallEditButton title="Add new product" />
</View>
</View> */
}

import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'
import SmallOutlineButton from '../Buttons/SmallOutlineButton'

const AnotherTableHeader = () => {
  return (
    <View className="mt-5 flex rounded-t-md border border-b-2 border-gray-400 bg-slate-700 px-4 py-2 sm:px-10">
      <View className="sm:flex-row sm:items-center sm:justify-between ">
        <View className="flex- flex-row gap-4">
          <Text className="text-gray-400">
            All users:{' '}
            <Text className="font-semibold text-white">1,356,546</Text>
          </Text>
          <Text className="text-gray-400">
            All users:{' '}
            <Text className="font-semibold text-white">1,356,546</Text>
          </Text>
        </View>
        <View className="mt-3 flex-row sm:mt-0">
          <SmallOutlineButton title="Table Setting" />
        </View>
      </View>
    </View>
  )
}

export default AnotherTableHeader

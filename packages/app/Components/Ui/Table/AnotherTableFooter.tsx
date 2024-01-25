import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'
import InputLabel from '../Inputs/InputLabel'
import DoubleOutlineButton from '../Buttons/DoubleOutlineButton'

const AnotherTableFooter = () => {
  return (
    <View className="flex justify-between border-b bg-slate-700 px-4 py-4 hover:bg-slate-600 sm:flex-row sm:items-center sm:px-10">
      <View className="gap-2 sm:flex-row sm:items-center">
        <Text className="text-xs text-white">Rows per page</Text>
        <InputLabel inputValue="10" />
        <Text className="text-xs font-bold text-white">
          10 <Text className="font-thin">of</Text> 100
        </Text>
      </View>
      <View>
        <DoubleOutlineButton />
      </View>
    </View>
  )
}

export default AnotherTableFooter

import { View } from 'app/design/view'
import { ScrollView } from 'moti'
import React from 'react'
import CheckBox from '../Inputs/CheckBox'
import { Text } from 'app/design/typography'

const AnotherColumnHeader: React.FC = () => {
  return (
    <View className="flex bg-slate-600 px-4 pb-4 pt-4 sm:px-10 sm:pb-0">
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ flexDirection: 'row', gap: 27 }}
      >
        <View className="flex-row sm:w-[11.5%]">
          <CheckBox />
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">User</Text>
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">User Role</Text>
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">Status</Text>
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">Social Profile</Text>
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">Promote</Text>
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">Rating</Text>
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">Last login</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default AnotherColumnHeader

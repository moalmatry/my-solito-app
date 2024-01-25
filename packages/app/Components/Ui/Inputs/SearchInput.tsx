import { Button } from 'app/design/Button'
import { Input, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'

const SearchInput: React.FC = () => {
  return (
    <View className="flex w-full sm:flex-row ">
      <Input className="rounded-s-md bg-gray-500 px-4 py-2" />
      <Button className="items-center rounded-e-md bg-green-500 px-4 py-2">
        <Text className="font-semibold text-white">Search</Text>
      </Button>
    </View>
  )
}

export default SearchInput

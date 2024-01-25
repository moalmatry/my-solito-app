import React from 'react'
import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

const DoubleOutlineButton: React.FC = () => {
  return (
    <View className="flex flex-row">
      <Button className="w-1/2 items-center rounded-s-md border-2 border-solid border-gray-300 bg-transparent px-3 py-1">
        <Text className="text-white">Previous</Text>
      </Button>
      <Button className="w-1/2 items-center rounded-e-md border-2 border-solid border-gray-300 bg-transparent px-3 py-1">
        <Text className="text-white">Next</Text>
      </Button>
    </View>
  )
}

export default DoubleOutlineButton

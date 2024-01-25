import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'
import React from 'react'

const OutlineDeleteButton: React.FC = () => {
  return (
    <Button className="items-center justify-center rounded-md border-2 border-solid border-red-500 bg-transparent px-6 py-3  text-lg">
      <Text className="font-bold text-red-500">Delete</Text>
    </Button>
  )
}

export default OutlineDeleteButton

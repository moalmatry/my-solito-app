import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'
import React from 'react'

interface Props {
  title: string
}

const SmallOutlineButton: React.FC<Props> = ({ title }: Props) => {
  return (
    <Button className="items-center justify-center rounded-md border-2 border-solid border-gray-500 bg-transparent px-3 py-1.5 text-lg">
      <Text className="font-bold text-gray-500">{title}</Text>
    </Button>
  )
}

export default SmallOutlineButton

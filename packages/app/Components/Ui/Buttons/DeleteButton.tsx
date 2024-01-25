import React from 'react'
import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'

interface Props {
  title?: string
}

const DeleteButton: React.FC = ({ title = 'Delete' }: Props) => {
  return (
    <Button className="items-center rounded-md  bg-red-400 px-6  py-3 text-lg">
      <Text className="font-bold text-white">{title}</Text>
    </Button>
  )
}

export default DeleteButton

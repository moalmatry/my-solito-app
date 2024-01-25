import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'
import React from 'react'

interface Props {
  title: string
}

const SmallEditButton: React.FC<Props> = ({ title }) => {
  return (
    <Button
      className={`mr-2 items-center justify-center  rounded-md bg-green-700 px-3 py-1.5`}
    >
      <Text className="text-sm font-bold text-white">{title}</Text>
    </Button>
  )
}

export default SmallEditButton

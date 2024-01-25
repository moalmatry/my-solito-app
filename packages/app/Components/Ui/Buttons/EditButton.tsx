import React from 'react'
import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'

interface Props {
  className?: string
  title?: string
}

const EditButton: React.FC<Props> = ({ className, title = 'Edit' }: Props) => {
  return (
    <Button
      className={`mr-2 items-center justify-center  rounded-md bg-green-700 px-6 py-3  ${className}`}
    >
      <Text className="text-sm font-bold text-white">{title}</Text>
    </Button>
  )
}

export default EditButton

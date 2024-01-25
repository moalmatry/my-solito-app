import React from 'react'
import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'

interface Props {
  title?: string
  className?: string
  textStyle?: string
}

const OutlineButton: React.FC<Props> = ({
  title = 'Preview',
  className,
  textStyle,
}: Props) => {
  return (
    <Button
      className={`items-center justify-center rounded-md border-2 border-solid border-gray-500 bg-transparent px-6 py-3 ${className}`}
    >
      <Text className={`text-sm font-bold text-gray-500 ${textStyle}`}>
        {title}
      </Text>
    </Button>
  )
}

export default OutlineButton

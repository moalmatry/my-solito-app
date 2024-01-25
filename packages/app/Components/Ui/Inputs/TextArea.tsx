import React from 'react'
import { Input, Text } from 'app/design/typography'

interface Props {
  title?: string
  inputValue?: string
  className?: string
}

const TextArea: React.FC<Props> = ({
  title,
  inputValue = '',
  className,
}: Props) => {
  return (
    <>
      {title && <Text className="mb-3 text-white">{title}</Text>}
      <Input
        className={`rounded-md bg-gray-500 px-4 py-2 text-white ${className}`}
        multiline={true}
        numberOfLines={6}
        defaultValue={inputValue}
      />
    </>
  )
}

export default TextArea

import React from 'react'
import { Text } from 'app/design/typography'

interface Props {
  title: string
  className?: string
}

const HeadLine: React.FC<Props> = ({ title, className }: Props) => {
  return (
    <Text className={`mb-1 font-[600] text-white ${className}`}>{title}</Text>
  )
}

export default HeadLine

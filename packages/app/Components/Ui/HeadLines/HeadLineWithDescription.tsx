import React from 'react'
import { P, Text } from 'app/design/typography'

interface Props {
  title: string
  subtitle: string
}

const HeadLineWithDescription: React.FC<Props> = ({
  title,
  subtitle,
}: Props) => {
  return (
    <>
      <Text className="mb-0 text-lg font-bold text-white">{title}</Text>
      <P className="mt-0 text-gray-300">{subtitle}</P>
    </>
  )
}

export default HeadLineWithDescription

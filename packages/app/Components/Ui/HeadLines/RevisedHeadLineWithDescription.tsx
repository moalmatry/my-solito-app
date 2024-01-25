import { P, Text } from 'app/design/typography'
import React from 'react'

interface Props {
  title: string
  subtitle: string
}

const RevisedHeadLineWithDescription: React.FC<Props> = ({
  title,
  subtitle,
}: Props) => {
  return (
    <>
      <Text className="mb-0 text-lg text-gray-300">{title}</Text>
      <P className="mt-0 font-bold text-white">{subtitle}</P>
    </>
  )
}

export default RevisedHeadLineWithDescription

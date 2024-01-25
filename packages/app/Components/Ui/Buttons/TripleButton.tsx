import { Button } from 'app/design/Button'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'

interface Props {
  first: string
  second: string
  third: string
}

const TripleButton: React.FC<Props> = ({ first, second, third }: Props) => {
  return (
    <View className="flex flex-row">
      <Button className="rounded-s-md bg-slate-600 px-4 py-2">
        <Text className="font-bold text-white">{first}</Text>
      </Button>
      <Button className="border-l border-r border-gray-500 bg-slate-600 px-4 py-2">
        <Text className="font-bold text-white">{second}</Text>
      </Button>
      <Button className="rounded-e-md bg-slate-600 px-4 py-2">
        <Text className="font-bold text-white">{third}</Text>
      </Button>
    </View>
  )
}

export default TripleButton

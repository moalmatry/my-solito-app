import React from 'react'
import { View } from 'app/design/view'
import { SolitoImage } from 'solito/image'
import HeadLineWithDescription from '../HeadLines/HeadLineWithDescription'

const image =
  'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png'
const InfoImage: React.FC = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <View className="overflow-hidden rounded-full bg-red-700">
        <SolitoImage src={image} width={50} height={50} alt="profile pic" />
      </View>
      <View className="justify-center">
        <HeadLineWithDescription title="Mohamed Almatry" subtitle="cairo" />
      </View>
    </View>
  )
}

export default InfoImage

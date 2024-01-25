import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'
import { SolitoImage } from 'solito/image'

const image =
  'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png'

interface Props {
  withTitle?: boolean
  title?: string
}

const ImagesIcons: React.FC<Props> = ({
  withTitle = true,
  title = 'Participants',
}) => {
  return (
    <View className="my-4">
      {withTitle && <Text className="text-md text-white">{title}</Text>}
      <View className="my-2 flex flex-row">
        <View className="overflow-hidden rounded-full ">
          <SolitoImage src={image} width={25} height={25} alt="info" />
        </View>
        <View className="ml-[-11px] overflow-hidden rounded-full ">
          <SolitoImage src={image} width={25} height={25} alt="info" />
        </View>
        <View className="ml-[-11px] overflow-hidden rounded-full ">
          <SolitoImage src={image} width={25} height={25} alt="info" />
        </View>
        <View className="ml-[-11px] overflow-hidden rounded-full ">
          <View className="flex h-[27px] w-[27px] items-center justify-center bg-slate-900">
            <Text className="text-center font-bold text-white ">+9</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ImagesIcons

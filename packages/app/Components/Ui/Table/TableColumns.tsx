import React from 'react'
import { CheckBox } from 'app/design/CheckBox'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { ScrollView } from 'moti'
import { SolitoImage } from 'solito/image'

const image =
  'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png'

interface Props {
  type?: string
}

const Status: React.FC<Props> = ({ type = 'Active' }: Props) => (
  <View
    className={
      type === 'Active'
        ? 'rounded-sm bg-green-600 px-1'
        : 'rounded-sm bg-red-600 px-1'
    }
  >
    <Text
      className={`font-bold ${
        type === 'Active' ? 'text-gray-300' : 'text-red-50'
      } `}
    >
      {type}
    </Text>
  </View>
)

const TableColumns: React.FC<Props> = ({ type }: Props) => {
  return (
    <View className="border-b border-gray-500  bg-slate-700 px-4 py-2  hover:bg-slate-500 sm:px-10">
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 50,
          alignItems: 'center',
        }}
        horizontal={true}
      >
        <View className="">
          <CheckBox />
        </View>
        <View className="flex-row items-center">
          <SolitoImage src={image} width={30} height={30} alt="test" />
          <Text className="ml-1 font-bold text-gray-300">Imac</Text>
        </View>

        <Text className="font-bold text-gray-300 ">PC</Text>
        <Text className="font-bold text-gray-300">Apple</Text>
        <Text className="font-bold text-gray-300">2999</Text>
        <Text className="font-bold text-gray-300">200 </Text>
        <Text className="font-bold text-gray-300">245</Text>
        <Status type={type} />
      </ScrollView>
    </View>
  )
}

export default TableColumns

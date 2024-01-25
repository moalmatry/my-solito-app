import { CheckBox } from 'app/design/CheckBox'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { ScrollView } from 'moti'
import React from 'react'
import { SolitoImage } from 'solito/image'
import SwitchButton from '../Buttons/SwitchButton'

interface USER_ROLE_PROPS {
  role: string
}

const UserRole: React.FC<USER_ROLE_PROPS> = ({ role }: USER_ROLE_PROPS) =>
  role === 'Admin' ? (
    <Text className="rounded-sm bg-green-600 px-1 text-xs font-bold text-white">
      Admin
    </Text>
  ) : (
    <Text className="rounded-sm bg-red-600 px-1 text-xs font-bold text-white">
      Viewer
    </Text>
  )

interface STATUS_PROPS {
  status: string
}

const Status: React.FC<STATUS_PROPS> = ({
  status = 'Active',
}: STATUS_PROPS) => (
  <View className="flex flex-row items-center justify-center gap-1">
    <View
      className={`h-1 w-1 rounded-full border border-green-50 p-1.5 ${
        status === 'Active' ? 'bg-green-500 ' : 'bg-red-500'
      } `}
    ></View>
    <Text className="mb-1 text-xs font-bold text-white">{status}</Text>
  </View>
)

const image =
  'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png'

interface Props {
  userRole: string
  status: string
}

const AnotherColumns: React.FC<Props> = ({ userRole, status }: Props) => {
  return (
    <View className="flex border-b bg-slate-700 px-4 py-4 hover:bg-slate-600 sm:px-10">
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ flexDirection: 'row', gap: 30 }}
      >
        <View className="flex-row sm:w-[11.5%]">
          <CheckBox />
        </View>
        <View className="flex flex-row items-center justify-center gap-2 sm:w-[10.5%]">
          <SolitoImage src={image} width={25} height={25} alt="Hello " />
          <Text className="font-bold text-gray-400">Jese</Text>
        </View>
        <View className="mt-1 items-center sm:w-[11.5%]">
          <UserRole role={userRole} />
        </View>
        <View className=" sm:w-[11.5%]">
          <Status status={status} />
        </View>
        <View className=" sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">➕❤️📥</Text>
        </View>
        <View className="flex-row">
          <SwitchButton />
        </View>
        <View className=" items-center sm:w-[11.5%]">
          <Text className="font-bold text-gray-400">4.7</Text>
        </View>
        <View className="">
          <Text className="font-bold text-gray-400">20 Nov 2022</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default AnotherColumns

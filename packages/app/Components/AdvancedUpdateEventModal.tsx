import { Text } from 'app/design/typography'
import React from 'react'
import Container from './Ui/Container'
import { View } from 'app/design/view'
import HeadLine from './Ui/HeadLines/HeadLine'
import InputLabel from './Ui/Inputs/InputLabel'
import ImagesIcons from './Ui/Images/ImagesIcons'
import OutlineButton from './Ui/Buttons/OutlineButton'
import CheckBox from './Ui/Inputs/CheckBox'
import EditButton from './Ui/Buttons/EditButton'
import OutlineDeleteButton from './Ui/Buttons/OutlineDeleteButton'
import { ScrollView } from 'moti'
import DescriptionBox from './Ui/Inputs/DescriptionBox'

const AdvancedUpdateEventModalPage: React.FC = () => {
  return (
    <>
      <Container className="lg:px-20 xl:px-60">
        <ScrollView>
          <View className="mb-5 mt-5 rounded-md bg-slate-700  px-4 py-8 sm:px-10">
            <View className="flex gap-4 sm:flex-row">
              <View className="sm:w-1/2">
                <HeadLine title="Update Event" className="mb-3" />
                <View>
                  <InputLabel
                    title="Title"
                    inputValue="The 4th Digital Tranformation"
                  />
                  <InputLabel
                    title="Location"
                    inputValue="The 4th Digital Tranformation"
                  />
                  <InputLabel
                    title="Select Date"
                    inputValue="The 4th Digital Tranformation"
                  />
                  <Text className="mt-2 text-gray-300">
                    Thursday, April 22{' '}
                    <Text className="font-bold text-white">04:30 - 05:30</Text>
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <View>
                    <ImagesIcons withTitle={false} />
                  </View>
                  <View className="flex flex-row gap-2 sm:gap-4 ">
                    <View className="">
                      <OutlineButton
                        title="Add member"
                        className="px-2 py-0.5"
                        textStyle="text-sm"
                      />
                    </View>
                    <View>
                      <OutlineButton
                        title="Find Time"
                        className="px-2 py-0.5"
                        textStyle="text-sm"
                      />
                    </View>
                  </View>
                </View>
                <HeadLine title="Guest Permissions" />
                <View className=" flex flex-row items-center gap-2">
                  <View className="flex flex-row items-center gap-2">
                    <CheckBox />
                    <Text className="font-semibold text-gray-100">
                      Hello World
                    </Text>
                  </View>
                  <View className="flex flex-row items-center gap-2">
                    <CheckBox />
                    <Text className="font-semibold text-gray-100">
                      Hello World
                    </Text>
                  </View>
                  <View className="flex flex-row items-center gap-2">
                    <CheckBox />
                    <Text className="font-semibold text-gray-100">
                      Hello World
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row items-center ">
                  <View className="mt-3 flex-shrink items-center">
                    <EditButton
                      title="join with google meet"
                      className=" py-0.5"
                    />
                  </View>
                  <View className="mt-3 flex flex-row items-center gap-3">
                    <Text>🔨</Text>
                    <Text>©️</Text>
                    <Text>✖️</Text>
                  </View>
                </View>
                <View className="mt-3">
                  <HeadLine title="Tag Color" className="mb-2" />
                  <View className="flex flex-row gap-2">
                    <View className="h-2 w-2 rounded-sm bg-red-500 p-2.5"></View>
                    <View className="h-2 w-2 rounded-sm bg-yellow-500 p-2.5"></View>
                    <View className="h-2 w-2 rounded-sm bg-green-500 p-2.5"></View>
                    <View className="h-2 w-2 rounded-sm bg-blue-500 p-2.5"></View>
                    <View className="h-2 w-2 rounded-sm bg-purple-500 p-2.5"></View>
                    <View className="h-2 w-2 rounded-sm bg-pink-500 p-2.5"></View>
                    <View className="h-2 w-2 rounded-sm bg-purple-500 p-2.5"></View>
                  </View>
                </View>
              </View>
              <View className="mt-10 sm:w-1/2">
                <HeadLine title="Description" />
                <DescriptionBox />
                <HeadLine title="Reminder" className="mt-3" />
                <View className="mb-4 flex gap-2 sm:flex-row">
                  <View className="sm:w-1/3">
                    <InputLabel />
                  </View>
                  <View className="sm:w-1/3">
                    <InputLabel />
                  </View>
                  <View className="sm:w-1/3">
                    <InputLabel />
                  </View>
                </View>
              </View>
            </View>
            <View className="mt-5 flex flex-row gap-2">
              <View>
                <EditButton />
              </View>
              <View>
                <OutlineDeleteButton />
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  )
}

export default AdvancedUpdateEventModalPage

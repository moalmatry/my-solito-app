import React from 'react'
import Container from './Ui/Container'
import { View } from 'app/design/view'
import { P1, Text } from 'app/design/typography'
import HeadLineWithBorder from './Ui/HeadLines/HeadLineWithBorder'
import ImagesIcons from './Ui/Images/ImagesIcons'
import RevisedHeadLineWithDescription from './Ui/HeadLines/RevisedHeadLineWithDescription'
import EditButton from './Ui/Buttons/EditButton'
import OutlineButton from './Ui/Buttons/OutlineButton'
import DeleteButton from './Ui/Buttons/DeleteButton'
import HeadLineWithDescription from './Ui/HeadLines/HeadLineWithDescription'

const AdvancedReadEventModal: React.FC = () => {
  return (
    <Container className="sm:px-20 md:px-32 lg:px-44 xl:px-[400px]">
      <View className="mb-5 mt-5 rounded-md bg-slate-700 px-4  py-4 sm:px-10">
        <HeadLineWithBorder title="The 4th Digital Transformation" />
        <View className="mt-3">
          <View className="gap-4 sm:flex-row">
            <View className="mt-3 rounded-md bg-gray-500 p-2 sm:w-1/2">
              <View>
                <P1 className="font-bold text-white">💼 Front end developer</P1>
                <P1 className="font-bold text-white">📌 Egypt</P1>
              </View>
              <ImagesIcons />
              <RevisedHeadLineWithDescription
                title="Online"
                subtitle="Google Meet"
              />
              <RevisedHeadLineWithDescription
                title="Duration"
                subtitle="All Day"
              />
            </View>

            <View className="mt-3 sm:w-1/2 ">
              <HeadLineWithDescription
                title="Details"
                subtitle="The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars"
              />
            </View>
          </View>
          <View className="mt-3 flex flex-row justify-between">
            <View className="flex flex-row">
              <EditButton />
              <OutlineButton />
            </View>
            <View>
              <DeleteButton />
            </View>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default AdvancedReadEventModal

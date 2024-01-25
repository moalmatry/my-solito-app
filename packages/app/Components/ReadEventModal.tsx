import { P1, Text } from 'app/design/typography'
import React from 'react'
import Container from './Ui/Container'
import { View } from 'app/design/view'
import HeadLineWithBorder from './Ui/HeadLines/HeadLineWithBorder'
import HeadLineWithDescription from './Ui/HeadLines/HeadLineWithDescription'
import EditButton from './Ui/Buttons/EditButton'
import DeleteButton from './Ui/Buttons/DeleteButton'

const ReadEventModal: React.FC = () => {
  return (
    <Container className="sm:px-20 md:px-32 lg:px-72 xl:px-[550px]">
      <View className="mb-5 mt-5 rounded-md bg-slate-700 px-4 py-6 sm:px-10">
        <HeadLineWithBorder title="The 4th Digital Transformation" />
        <View className="mt-3">
          <P1 className="font-bold text-white">💼 Front end developer</P1>
          <P1 className="font-bold text-white">📌 Egypt</P1>
        </View>
        <View className="mt-3">
          <HeadLineWithDescription
            title="Details"
            subtitle="The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars"
          />
        </View>
        <View className="flex flex-row">
          <EditButton />
          <DeleteButton />
        </View>
      </View>
    </Container>
  )
}

export default ReadEventModal

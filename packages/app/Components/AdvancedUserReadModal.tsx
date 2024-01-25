import React from 'react'
import Container from './Ui/Container'
import { View } from 'app/design/view'
import InfoImage from './Ui/Images/InfoImage'
import { P, P1 } from 'app/design/typography'
import RevisedHeadLineWithDescription from './Ui/HeadLines/RevisedHeadLineWithDescription'
import EditButton from './Ui/Buttons/EditButton'
import OutlineButton from './Ui/Buttons/OutlineButton'
import DeleteButton from './Ui/Buttons/DeleteButton'
import HeadLineWithDescription from './Ui/HeadLines/HeadLineWithDescription'

const AdvancedUserReadModal: React.FC = () => {
  return (
    <Container className="sm:px-20 md:px-32 lg:px-44 xl:px-[400px]">
      <View className="mb-5 mt-5 rounded-md bg-slate-700 px-4  py-4 sm:px-10">
        <View className="flex sm:flex-row">
          <View className="sm:w-1/2">
            <InfoImage />
            <View className="mt-3">
              <P1 className="text-gray-300">💼 Front end developer</P1>
              <P1 className="text-gray-300">📌 Egypt</P1>
            </View>
            <View className="mt-3">
              <RevisedHeadLineWithDescription
                title="Email Address"
                subtitle="moalmatry2000@gmail.com"
              />
            </View>
            <View className="mt-3">
              <RevisedHeadLineWithDescription
                title="Home Address"
                subtitle="92 Miles Drive, Newark, NJ 07103, California, United States of America"
              />
            </View>

            <View className="mt-3">
              <RevisedHeadLineWithDescription
                title="Phone Number"
                subtitle="+201553957811 / +201069605541"
              />
            </View>
          </View>
          <View className="justify-center sm:w-1/2">
            <HeadLineWithDescription
              title="Biography"
              subtitle="Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3"
            />
            <View>
              <HeadLineWithDescription title="Social" subtitle="❤️❤️❤️❤️❤️" />
            </View>
          </View>
        </View>
        <View className="mt-3 flex flex-row justify-between">
          <View className="flex flex-row gap-2">
            <EditButton />
            <OutlineButton />
          </View>
          <View>
            <DeleteButton />
          </View>
        </View>
      </View>
    </Container>
  )
}

export default AdvancedUserReadModal

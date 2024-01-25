import { Text } from 'app/design/typography'
import React from 'react'
import Container from './Ui/Container'

import HeadLineWithDescription from './Ui/HeadLines/HeadLineWithDescription'
import { View } from 'app/design/view'
import EditButton from './Ui/Buttons/EditButton'
import DeleteButton from './Ui/Buttons/DeleteButton'

const ReadUserModal: React.FC = () => {
  return (
    <>
      <Container className="sm:px-20 md:px-32 lg:px-56 xl:px-[450px]">
        <View className="mb-5 mt-5 rounded-md bg-slate-700 px-4  py-2 sm:px-10">
          <View className="mt-2">
            <HeadLineWithDescription title="Helene Engels" subtitle="world" />
          </View>
          <View className="mt-2">
            <HeadLineWithDescription
              title="Email"
              subtitle="helene@company.com"
            />
          </View>
          <View className="my-2">
            <HeadLineWithDescription
              title="Biography"
              subtitle="Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3. "
            />
          </View>
          <View className="flex flex-row justify-between">
            <EditButton />
            <DeleteButton />
          </View>
        </View>
      </Container>
    </>
  )
}

export default ReadUserModal

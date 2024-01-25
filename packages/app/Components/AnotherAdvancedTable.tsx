import React from 'react'
import Container from './Ui/Container'
import { View } from 'app/design/view'
import AnotherTableHeader from './Ui/Table/AnotherTableHeader'
import AnotherTableFilter from './Ui/Table/AnotherTableFilter'
import { Text } from 'app/design/typography'
import { ScrollView } from 'moti'
import AnotherColumnHeader from './Ui/Table/AnotherColumnHeader'
import AnotherColumns from './Ui/Table/AnotherColumns'
import AnotherTableFooter from './Ui/Table/AnotherTableFooter'

const AnotherAdvancedTable: React.FC = () => {
  return (
    <Container className="mb-0 pb-0 sm:px-20 md:px-10 lg:px-10 xl:px-[100px]">
      <ScrollView>
        <AnotherTableHeader />
        <AnotherTableFilter />
        <AnotherColumnHeader />

        <AnotherColumns status="Active" userRole="Admin" />
        <AnotherColumns status="Offline" userRole="Visitor" />
        <AnotherColumns status="Active" userRole="Admin" />
        <AnotherColumns status="Offline" userRole="Visitor" />
        <AnotherColumns status="Active" userRole="Admin" />
        <AnotherColumns status="Offline" userRole="Visitor" />
        <AnotherColumns status="Active" userRole="Admin" />
        <AnotherColumns status="Offline" userRole="Visitor" />
        <AnotherColumns status="Active" userRole="Admin" />
        <AnotherColumns status="Offline" userRole="Visitor" />
        <AnotherTableFooter />
      </ScrollView>
    </Container>
  )
}

export default AnotherAdvancedTable

{
  /* <View className="mt-5 rounded-t-md bg-slate-700 px-4  py-6 sm:px-10"></View> */
}

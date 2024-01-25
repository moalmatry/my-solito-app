import React from 'react'
import Container from './Ui/Container'
import { View } from 'app/design/view'
import TableHeader from './Ui/Table/TableHeader'
import TableFilter from './Ui/Table/TableFilter'
import TableColumnHeader from './Ui/Table/TableColumnHeader'
import { ScrollView } from 'moti'
import TableColumns from './Ui/Table/TableColumns'
import TableFooter from './Ui/Table/TableFooter'

const AdvancedTable: React.FC = () => {
  return (
    <>
      <ScrollView>
        <Container className="mb-0 pb-0 sm:px-20 md:px-10 lg:px-10 xl:px-[100px]">
          <View className="mt-5 rounded-t-md bg-slate-700 px-4  py-6 sm:px-10">
            <TableHeader />
            <TableFilter />
          </View>

          <TableColumnHeader />
          <TableColumns />
          <TableColumns type="Invalid" />
          <TableColumns />
          <TableColumns />
          <TableColumns type="Invalid" />
          <TableColumns />
          <TableColumns />
          <TableColumns type="Invalid" />
          <TableColumns />

          <TableFooter />
        </Container>
      </ScrollView>
    </>
  )
}

export default AdvancedTable

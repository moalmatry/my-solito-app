import { View } from 'app/design/view'
import React from 'react'
import SmallEditButton from '../Buttons/SmallEditButton'
import TripleButton from '../Buttons/TripleButton'

const AnotherTableFilter: React.FC = () => {
  return (
    <View className="flex bg-slate-700 px-4  pb-2 sm:px-10">
      <View className="mt-3 flex justify-between sm:flex-row">
        <View className="">
          <SmallEditButton title="Add new user" />
        </View>
        <View className="mt-3 items-center sm:mt-0">
          <TripleButton
            first="Suspense all"
            second="Archive all"
            third="Delete all"
          />
        </View>
      </View>
    </View>
  )
}

export default AnotherTableFilter

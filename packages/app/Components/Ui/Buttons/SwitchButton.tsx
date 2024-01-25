import React, { useState } from 'react'
import { Button } from 'app/design/Button'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'

const CustomSwitch: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev)
  }

  return (
    <Button
      className="flex-row items-center bg-transparent"
      onPress={toggleSwitch}
    >
      <View
        className={`h-5 w-10 rounded-full border border-gray-300  p-[1px] ${
          isEnabled ? 'bg-green-500' : 'bg-slate-600'
        }`}
      >
        <View
          className={`h-4 w-4 rounded-full bg-white transition-all ease-in-out  ${
            isEnabled && 'translate-x-5'
          }`}
        />
      </View>
    </Button>
  )
}

export default CustomSwitch

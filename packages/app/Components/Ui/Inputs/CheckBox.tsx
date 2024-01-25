import React, { useState } from 'react'
import { View } from 'moti'
import { CheckBox as Checkbox } from 'app/design/CheckBox'

interface Props {
  className?: string
}

const CheckBox: React.FC<Props> = ({ className }) => {
  const [checked, setChecked] = useState(false)
  return (
    <View className={`flex-row bg-gray-600 ${className}`}>
      <Checkbox
        onClick={() => setChecked((checked) => !checked)}
        onValueChange={setChecked}
        value={checked}
        className="overflow-hidden rounded-md"
        color={'#3b82f6'}
      />
    </View>
  )
}

export default CheckBox

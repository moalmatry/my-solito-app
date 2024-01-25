import { View } from 'app/design/view'
import React from 'react'
import { SolitoImage } from 'solito/image'

interface Props {
  url?: string
  className?: string
}

const ImageBox = ({
  url = 'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png',
  className,
}: Props) => {
  return (
    <View
      className={`mb-1 mr-2 flex w-['29%'] items-center justify-center rounded-md bg-gray-500 px-1 sm:w-1/5 sm:py-4 ${className}`}
    >
      <SolitoImage src={url} alt="Apple iMac 25" width={100} height={100} />
    </View>
  )
}

export default ImageBox

import { P, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import Container from './Ui/Container'
import ImageBox from './Ui/Images/ImageBox'
import { ScrollView } from 'moti'
import { Button } from 'app/design/Button'
import ReadProductModalDetailsBox from './Ui/ReadProductModalDetailsBox'
import DeleteButton from './Ui/Buttons/DeleteButton'
import EditButton from './Ui/Buttons/EditButton'
import OutlineButton from './Ui/Buttons/OutlineButton'
import ColoredIcon from './Ui/ColoredIcon'
const images: string[] = [
  'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png',
  'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png',
  'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png',
]

const ReadProductModal: React.FC = () => {
  return (
    <>
      <Container className="lg:px-20 xl:px-60">
        <ScrollView>
          <View className="mb-5 mt-5 rounded-md bg-slate-700 px-4  py-2 sm:px-10">
            <View className="mb-5">
              <Text className="mb-1 text-xl font-[600] text-white">
                Apple iMac 25
              </Text>
              <Text className="text-xl font-[600] text-white">$3000</Text>
            </View>

            <View className="flex flex-row flex-wrap justify-center gap-2 sm:gap-8">
              <ImageBox />
              <ImageBox url="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" />
              <ImageBox url="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" />
              <ImageBox />
            </View>
            <View className="mt-1">
              <Text className="text-lg font-[600] text-white">Details</Text>
              <P className="text-gray-100">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </P>
            </View>
            <View className="mt-1">
              <Text className="mb-1 text-lg font-[600] text-white">Colors</Text>
              <View className="flex flex-row gap-2">
                <View className="h-7 w-7 rounded-full bg-red-500 p-3"></View>
                <View className="h-7 w-7 rounded-full bg-yellow-500 p-3"></View>
                <View className="h-7 w-7 rounded-full bg-green-500 p-3"></View>
                <View className="h-7 w-7 rounded-full bg-blue-500 p-3"></View>
                <View className="h-7 w-7 rounded-full bg-purple-500 p-3"></View>
                <View className="h-7 w-7 rounded-full bg-pink-500 p-3"></View>
                {/*
                we tried to create custom colored icon but it didn't work in mobile and 
                <ColoredIcon/> 
                
                */}
              </View>
            </View>
            <View className="mt-5 flex-row flex-wrap justify-center sm:gap-3">
              <ReadProductModalDetailsBox
                title="Details"
                description="Flowbite"
              />
              <ReadProductModalDetailsBox
                title="Ship from"
                description="Flowbite"
              />
              <ReadProductModalDetailsBox
                title="Product state"
                description="Flowbite"
              />
              <ReadProductModalDetailsBox
                title="Shipping"
                description="Flowbite"
              />
              <ReadProductModalDetailsBox
                title="Dimensions"
                description="Flowbite"
              />
              <ReadProductModalDetailsBox
                title="Details"
                description="Flowbite"
              />
            </View>
            <View className="mt-5 flex flex-row justify-between">
              <View className="flex flex-row gap-2">
                <Button className="items-center rounded-md bg-green-700 px-6 py-3  text-lg">
                  <Text className="font-bold text-white">Edit</Text>
                </Button>
                {/* 
                  we created custom colored icon but it didn't work in mobile and work in web well 

                <EditButton />
                
                */}
                <Button className="items-center rounded-md border-2 border-solid border-gray-500 bg-transparent px-6 py-3  text-lg">
                  <Text className="font-bold text-gray-500">Preview</Text>
                </Button>
                {/*
                 we tried to create custom colored icon but it didn't work in mobile and 
                 <OutlineButton /> 
                 
                 */}
              </View>
              <View>
                <DeleteButton />
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  )
}

export default ReadProductModal

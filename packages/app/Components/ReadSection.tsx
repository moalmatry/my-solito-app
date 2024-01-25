import { Button } from 'app/design/Button'
import { P, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import Container from './Ui/Container'

const ReadSection: React.FC = () => {
  return (
    <>
      <Container>
        <View className="mx-auto ">
          <View className="mb-4">
            <Text className="mb-1 text-xl font-[600]">Apple iMac 25</Text>
            <Text className="text-xl font-[600]">$2999</Text>
          </View>
          <View>
            <Text className="text-lg font-[600]">Details</Text>
            <P className="text-gray-500">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </P>
          </View>
          <View className="flex flex-row gap-4 ">
            <View>
              <Text className="pb-0 text-lg font-[600]">Category</Text>
              <P className="font-thin text-gray-500">Electronics/pc</P>
              <Button className="items-center rounded-md bg-blue-700 py-3">
                <Text className="font-bold text-white">Edit</Text>
              </Button>
            </View>
            <View>
              <Text className="pb-0 text-lg font-[600]">Item weight</Text>
              <P className="font-thin text-gray-500">12kg</P>
              <Button className="items-center rounded-md bg-red-600 py-3">
                <Text className="font-bold text-white">Delete</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
    </>
  )
}

export default ReadSection

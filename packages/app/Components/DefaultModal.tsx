import Container from './Ui/Container'
import { View } from 'app/design/view'
import HeadLineWithBorder from './Ui/HeadLines/HeadLineWithBorder'
import InputLabel from './Ui/Inputs/InputLabel'
import TextArea from './Ui/Inputs/TextArea'
import EditButton from './Ui/Buttons/EditButton'
import OutlineDeleteButton from './Ui/Buttons/OutlineDeleteButton'

const DefaultModal: React.FC = () => {
  return (
    <Container>
      <View className="mb-5 mt-5 rounded-md bg-slate-700 px-4  py-4 sm:px-10">
        <HeadLineWithBorder title="Update Product" />
        <View className="mt-3">
          <View className="flex sm:flex-row sm:gap-4">
            <View className="sm:w-[49%]">
              <InputLabel title="Name" inputValue="Mohamed Almatry" />
              <InputLabel title="Price" />
            </View>
            <View className="sm:w-[49%]">
              <InputLabel title="Brand" />
              <InputLabel title="Category" />
            </View>
          </View>
          <View className="mt-3">
            <TextArea title="Description" />
          </View>
          <View className="mt-5 flex flex-row">
            <EditButton />
            <OutlineDeleteButton />
          </View>
        </View>
      </View>
    </Container>
  )
}

export default DefaultModal

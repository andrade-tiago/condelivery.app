import { Ionicons, Octicons } from "@expo/vector-icons"
import Input from "../Input"
import Colors from "@/constants/colors"

const SearchBar: React.FunctionComponent = () => {
  return (
    <Input.Root variant="outline">
      <Octicons name="search" size={20} color={Colors.neutral[600]} />
      <Input.Field placeholder="Buscar..." />
      <Ionicons name="options-sharp" size={20} color={Colors.neutral[600]} />
    </Input.Root>
  )
}
export default SearchBar

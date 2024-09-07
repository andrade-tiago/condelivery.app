import { Ionicons, Octicons } from "@expo/vector-icons"
import Input from "../Input"
import Colors from "@/constants/colors"

const SearchBar: React.FunctionComponent = () => {
  return (
    <Input.Root variant="outline">
      <Octicons name="search" size={20} color={Colors.gray} />
      <Input.Field placeholder="Buscar..." />
      <Ionicons name="options-sharp" size={20} color={Colors.gray} />
    </Input.Root>
  )
}
export default SearchBar

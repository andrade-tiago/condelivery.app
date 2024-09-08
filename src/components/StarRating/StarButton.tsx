import Colors from "@/constants/colors"
import { FontAwesome } from "@expo/vector-icons"
import { GestureResponderEvent } from "react-native"

type StarButtonProps = {
  active?: boolean,
  onPress?: (event: GestureResponderEvent) => void
}

const StarButton: React.FunctionComponent<StarButtonProps> = (props) => {
  return (
    <FontAwesome name={props.active ? 'star' : 'star-o'}
      onPress={props.onPress}
      size={32}
      color={Colors.secondary[300]}
    />
  )
}
export default StarButton

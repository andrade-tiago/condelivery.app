import { GestureResponderEvent } from "react-native"

type GlobalButtonProps = {
  text: string,
  icon?: string,
  onPress?: (event: GestureResponderEvent) => void,
  full?: boolean,
}

export default GlobalButtonProps

import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native"
import { PrimaryText } from "../Text"
import { MaterialIcons } from "@expo/vector-icons"
import Colors from "@/constants/colors"

export type SettingOptionProps = {
  text: string
  onPress?: (event: GestureResponderEvent) => void
}

const SettingOption: React.FunctionComponent<SettingOptionProps> = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <PrimaryText>
        {props.text}
      </PrimaryText>

      <MaterialIcons name="keyboard-arrow-right" size={32} color={Colors.black[900]} />
    </TouchableOpacity>
  )
}
export default SettingOption

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
})

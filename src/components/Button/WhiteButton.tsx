import Colors from "@/constants/colors"
import GlobalButtonProps from "@/types/global-button-props"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const WhiteButton: React.FunctionComponent<GlobalButtonProps> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={.6}
      style={{ ...styles.container, width: (props.full ? '100%' : 'auto') }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}
export default WhiteButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 54,
  },
  text: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: '700',
  },
})

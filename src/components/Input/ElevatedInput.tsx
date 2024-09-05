import Colors from "@/constants/colors"
import GlobalInputRootProps from "@/types/global-input-root-props"
import { StyleSheet, View } from "react-native"

const ElevatedInputLayout: React.FunctionComponent<GlobalInputRootProps> = (props) => {
  return (
    <View style={{ ...styles.wrapper, width: props.width || 'auto' }}>
      {props.children}
    </View>
  )
}
export default ElevatedInputLayout

const styles = StyleSheet.create({
  wrapper: {
    elevation: 4,
    borderRadius: 6,
    minHeight: 40,
    gap: 4,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
})

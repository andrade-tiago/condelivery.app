import Colors from "@/constants/colors"
import GlobalInputRootProps from "@/types/global-input-root-props"
import { StyleSheet, View } from "react-native"

const OutlineInputLayout: React.FunctionComponent<GlobalInputRootProps> = (props) => {
  return (
    <View style={{ ...styles.wrapper, width: props.width || 'auto' }}>
      {props.children}
    </View>
  )
}
export default OutlineInputLayout

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1.5,
    borderColor: Colors.lightGray,
    borderRadius: 6,
    minHeight: 40,
    gap: 4,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
})

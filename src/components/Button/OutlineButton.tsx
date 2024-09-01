import Colors from "@/constants/colors"
import GlobalButtonProps from "@/types/global-button-props"
import { StyleSheet, Text, View } from "react-native"

const OutlineButton: React.FunctionComponent<GlobalButtonProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  )
}
export default OutlineButton

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.orange,
    borderWidth: 1.5,
    borderRadius: 6,
    overflow: 'hidden',
    flex: 1,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: '700',
  }
})

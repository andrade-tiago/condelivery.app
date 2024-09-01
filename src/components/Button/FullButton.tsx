import Colors from "@/constants/colors"
import GlobalButtonProps from "@/types/global-button-props"
import { StyleSheet, Text, View } from "react-native"

const FullButton: React.FunctionComponent<GlobalButtonProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  )
}
export default FullButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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

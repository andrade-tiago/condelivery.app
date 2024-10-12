import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type BoldTextProps = TextProps

const BoldText: React.FunctionComponent<BoldTextProps> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.boldText, style)}
      {...props}
    />
  )
}
export default BoldText

const styles = StyleSheet.create({
  boldText: {
    color: Colors.black[900],
    fontSize: 16,
    fontWeight: '700',
  },
})

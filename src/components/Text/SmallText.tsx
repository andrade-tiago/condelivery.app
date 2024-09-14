import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type SmallTextProps = TextProps

const SmallText: React.FunctionComponent<SmallTextProps> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.smallText, style)}
      {...props}
    />
  )
}
export default SmallText

const styles = StyleSheet.create({
  smallText: {
    color: Colors.neutral[700],
    fontSize: 14,
    fontWeight: '400',
  },
})

import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type PrimaryTextProps = TextProps

const PrimaryText: React.FunctionComponent<PrimaryTextProps> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.primaryText, style)}
      {...props}
    />
  )
}
export default PrimaryText

const styles = StyleSheet.create({
  primaryText: {
    color: Colors.black[900],
    fontSize: 16,
    fontWeight: '400',
  },
})

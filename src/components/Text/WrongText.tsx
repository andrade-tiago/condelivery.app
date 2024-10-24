import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type WrongTextProps = TextProps

const WrongText: React.FunctionComponent<WrongTextProps> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.wrong, style)}
      {...props}
    />
  )
}
export default WrongText

const styles = StyleSheet.create({
  wrong: {
    color: Colors.error[400],
    fontSize: 16,
    fontWeight: '400',
  },
})

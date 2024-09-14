import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type H1Props = TextProps

const H1: React.FunctionComponent<H1Props> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.h1, style)}
      {...props}
    />
  )
}
export default H1

const styles = StyleSheet.create({
  h1: {
    color: Colors.black[900],
    fontSize: 20,
    fontWeight: '700',
  },
})

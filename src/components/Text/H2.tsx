import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type H2Props = TextProps

const H2: React.FunctionComponent<H2Props> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.h2, style)}
      {...props}
    />
  )
}
export default H2

const styles = StyleSheet.create({
  h2: {
    color: Colors.black[900],
    fontSize: 18,
    fontWeight: '700',
  },
})

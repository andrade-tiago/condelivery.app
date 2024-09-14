import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type StrongTextProps = TextProps

const StrongText: React.FunctionComponent<StrongTextProps> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.strong, style)}
      {...props}
    />
  )
}
export default StrongText

const styles = StyleSheet.create({
  strong: {
    color: Colors.primary[300],
    fontSize: 16,
    fontWeight: '400',
  },
})

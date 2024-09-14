import Colors from "@/constants/colors"
import { StyleSheet, Text, TextProps } from "react-native"

type SecondaryTextProps = TextProps

const SecondaryText: React.FunctionComponent<SecondaryTextProps> = ({ style, ...props }) => {
  return (
    <Text
      style={StyleSheet.compose(styles.secondaryText, style)}
      {...props}
    />
  )
}
export default SecondaryText

const styles = StyleSheet.create({
  secondaryText: {
    color: Colors.neutral[700],
    fontSize: 16,
    fontWeight: '400',
  },
})

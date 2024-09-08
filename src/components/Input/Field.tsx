import Colors from "@/constants/colors"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

type FieldProps = Omit<TextInputProps, 'placeholderTextColor' | 'style'>

const Field: React.FunctionComponent<FieldProps> = (props) => {
  return (
    <TextInput
      placeholderTextColor={Colors.neutral[600]}
      style={styles.input}
      {...props}
    />
  )
}
export default Field

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: Colors.black[900],
    fontSize: 14,
  },
})

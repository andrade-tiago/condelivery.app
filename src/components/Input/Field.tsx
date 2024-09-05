import Colors from "@/constants/colors"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

type FieldProps = Omit<TextInputProps, 'placeholderTextColor' | 'style'>

const Field: React.FunctionComponent<FieldProps> = (props) => {
  return (
    <TextInput
      placeholderTextColor={Colors.gray}
      style={styles.input}
      {...props}
    />
  )
}
export default Field

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: Colors.black,
    fontSize: 14,
  },
})

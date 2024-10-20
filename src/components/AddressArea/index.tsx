import { StyleSheet, View } from "react-native"
import { PrimaryText, SmallText } from "../Text"
import { MaterialIcons } from "@expo/vector-icons"
import Colors from "@/constants/colors"

const AddressArea: React.FunctionComponent = () => {
  return (
    <View style={styles.wrapper}>
      <SmallText>
        Localização atual{" "}
        <MaterialIcons name="keyboard-arrow-down"
          size={10}
          color={Colors.neutral[700]}
        />
      </SmallText>

      <PrimaryText
        numberOfLines={1}
        style={styles.addressName}
      >
        Avenida Santa Fé, 93 - Recanto Regina
      </PrimaryText>
    </View>
  )
}
export default AddressArea

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
  addressName: {
    maxWidth: 200,
  },
})

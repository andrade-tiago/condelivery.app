import Colors from "@/constants/colors"
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"
import { GestureResponderEvent, StyleSheet, View } from "react-native";

type CheckboxProps = {
  checked?: boolean,
  onPress?: (event: GestureResponderEvent) => void,
}

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
  const gradientColors = [ Colors.primary[300], Colors.secondary[300] ] as string[]

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: .5 }}
      end={{ x: 1, y: .5 }}
      style={styles.background}
      onTouchEnd={props.onPress}
    >
      <View
        style={{
          ...styles.content,
          backgroundColor: props.checked ? 'transparent' : Colors.white[0],
        }}
      >
        <FontAwesome6 name="check"
          size={16}
          color={Colors.white[0]}
        />
      </View>
    </LinearGradient>
  )
}
export default Checkbox

const styles = StyleSheet.create({
  background: {
    borderRadius: 4,
    padding: 2,
    height: 24,
    aspectRatio: 1 / 1,
  },
  content: {
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})

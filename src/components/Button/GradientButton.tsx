import Colors from "@/constants/colors"
import GlobalButtonProps from "@/types/global-button-props"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const GradientButton: React.FunctionComponent<GlobalButtonProps> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={.6}
      style={{ ...styles.container, width: (props.full ? '100%' : 'auto') }}
      onPress={props.onPress}
    >
      <LinearGradient
        colors={[ Colors.orange, Colors.lightOrange ]}
        start={{ x: 0, y: .5 }}
        end={{ x: 1, y: .5 }}
        style={styles.background}
      >
        <Text style={styles.text}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default GradientButton

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    overflow: 'hidden',
    height: 54,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
})

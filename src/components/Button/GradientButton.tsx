import Colors from "@/constants/colors"
import GlobalButtonProps from "@/types/global-button-props"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const GradientButton: React.FunctionComponent<GlobalButtonProps> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={.8}
      style={styles.clickable}
    >
      <View style={styles.container}>
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
      </View>
    </TouchableOpacity>
  )
}
export default GradientButton

const styles = StyleSheet.create({
  clickable: {
    width: '100%',
  },
  container: {
    borderRadius: 6,
    overflow: 'hidden',
    flex: 1,
    minHeight: 60,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
})

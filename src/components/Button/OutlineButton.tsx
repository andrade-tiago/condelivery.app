import Colors from "@/constants/colors"
import GlobalButtonProps from "@/types/global-button-props"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const OutlineButton: React.FunctionComponent<GlobalButtonProps> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={.6}
      style={{ ...styles.container, width: (props.full ? '100%' : 'auto') }}
      onPress={props.onPress}
    >
      <LinearGradient
        colors={[ Colors.primary[300], Colors.secondary[300] ]}
        start={{ x: 0, y: .5 }}
        end={{ x: 1, y: .5 }}
        style={styles.border}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            {props.text}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default OutlineButton

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary[300],
    borderRadius: 6,
    overflow: 'hidden',
    height: 54,
  },
  border: {
    flex: 1,
    padding: 1.5,
  },
  content: {
    borderRadius: 5,
    flex: 1,
    backgroundColor: Colors.white[0],
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  text: {
    color: Colors.primary[300],
    fontSize: 16,
    fontWeight: '700',
  }
})

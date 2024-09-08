import Colors from "@/constants/colors"
import { ActivityIndicator, StyleSheet, View } from "react-native"

const LoadingScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={Colors.primary[300]}
        size="large"
      />
    </View>
  )
}
export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

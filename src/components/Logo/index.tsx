import { Image, StyleSheet } from "react-native"

const Logo: React.FunctionComponent = () => {
  return (
    <Image
      source={require('@/img/logo.png')}
      style={styles.logoImage}
      resizeMode="contain"
    />
  )
}
export default Logo

const styles = StyleSheet.create({
  logoImage: {
    width: 180,
    height: 60,
  },
})

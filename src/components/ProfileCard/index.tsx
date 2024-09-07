import Colors from "@/constants/colors"
import { Image, StyleSheet, Text, View } from "react-native"

type ProfileCardProps = {
  title: string,
  imgURL: string,
}

const ProfileCard: React.FunctionComponent<ProfileCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.imgURL }}
        style={styles.image}
      />

      <Text
        numberOfLines={1}
        style={styles.text}
      >
        {props.title}
      </Text>
    </View>
  )
}
export default ProfileCard

const styles = StyleSheet.create({
  container: {
    gap: 8,
    alignItems: 'center',
  },
  image: {
    width: 54,
    aspectRatio: 1 / 1,
    borderRadius: 27,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '700',
    maxWidth: 108,
  },
})

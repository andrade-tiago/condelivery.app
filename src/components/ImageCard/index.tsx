import Colors from "@/constants/colors"
import { Image, StyleSheet, View } from "react-native"

type ImageCardProps = {
  imgURL: string,
}

const ImageCard: React.FunctionComponent<ImageCardProps> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: props.imgURL }}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  )
}
export default ImageCard

const styles = StyleSheet.create({
  wrapper: {
    width: 60,
    aspectRatio: 1 / 1,
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 4,
  },
  img: {
    flex: 1,
    backgroundColor: Colors.white[0],
  },
})

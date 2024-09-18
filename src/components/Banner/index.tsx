import Colors from "@/constants/colors"
import {
  ColorValue,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native"

type BannerProps = {
  imgURL: string,
  title: string,
  description: string,
  imgAlign: 'left' | 'right',
  backgroundColor: ColorValue,
}

const Banner: React.FunctionComponent<BannerProps> = (props) => {
  const data: React.JSX.Element = (
    <View style={styles.textContainer}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <Text style={styles.description}>
        {props.description}
      </Text>
    </View>
  )

  const image: React.JSX.Element = (
    <Image
      source={{ uri: props.imgURL }}
      style={styles.image}
      resizeMode="contain"
    />
  )

  const content: React.JSX.Element =
    (props.imgAlign === 'left')
    ? <>{image}{data}</>
    : <>{data}{image}</>

  return (
    <View style={{ ...styles.wrapper, backgroundColor: props.backgroundColor }}>
      {content}
    </View>
  )
}
export default Banner

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },
  textContainer: {
    gap: 8,
    maxWidth: 250,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: Colors.white[0],
    fontWeight: '400',
    fontSize: 16,
  },
  description: {
    color: Colors.white[0],
    fontWeight: '700',
    fontSize: 18,
  },
  image: {
    flex: 1,
  },
})

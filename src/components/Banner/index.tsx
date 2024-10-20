import Colors from "@/constants/colors"
import React from "react"
import { Image, LayoutChangeEvent, StyleSheet, View } from "react-native"

type BannerProps = {
  imgURL: string
}

const Banner: React.FunctionComponent<BannerProps> = (props) => {
  const [imageDimensions, setImageDimensions] = React.useState({ width: 0, height: 0 })
  const [bannerWidth, setBannerWidth] = React.useState(0)
  const [bannerHeight, setBannerHeight] = React.useState(0)

  const onWrapperLayout = (event: LayoutChangeEvent) => {
    setBannerWidth(event.nativeEvent.layout.width)
  }

  React.useEffect(() => {
    Image.getSize(props.imgURL, (width, height) => {
      setImageDimensions({ width, height })
    })
  }, [])

  React.useEffect(() => {
    if (!imageDimensions.width) { return }

    setBannerHeight(
      (imageDimensions.height / imageDimensions.width) * bannerWidth
    )
  }, [imageDimensions, bannerWidth])

  return (
    <View
      style={{ ...styles.wrapper, height: bannerHeight }}
      onLayout={onWrapperLayout}
    >
      <Image
        source={{ uri: props.imgURL }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}
export default Banner

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: Colors.white[0],
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
})

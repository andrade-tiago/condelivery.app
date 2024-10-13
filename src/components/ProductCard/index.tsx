import Colors from "@/constants/colors"
import { useRouter } from "expo-router"
import { DimensionValue, Image, StyleSheet, Text, View } from "react-native"

type ProductCardProps = {
  productId: number,
  imgURL: string,
  title: string,
  description: string,
  width?: DimensionValue,
  blockPressEvent?: boolean,
}

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
  const router = useRouter()

  return (
    <View
      style={{ ...styles.container, width: props.width || '100%' }}
      onTouchEnd={
        props.blockPressEvent
          ? undefined
          : () => router.push(`/(app)/request-details/${props.productId}`)
      }
    >
      <Image
        source={{ uri: props.imgURL }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.description}>
          {props.description}
        </Text>
      </View>
    </View>
  )
}
export default ProductCard

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: 156,
  },
  dataContainer: {
    gap: 4,
  },
  title: {
    color: Colors.black[900],
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    color: Colors.neutral[600],
    fontSize: 16,
    fontWeight: '400',
  },
})

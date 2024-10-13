import ProductCard from "@/components/ProductCard"
import Colors from "@/constants/colors"
import products, { Product } from "@/content/products"
import restaurants from "@/content/restaurants"
import { useLocalSearchParams, useNavigation } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type Params = {
  id: string,
}

const RestaurantScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<Params>()
  const navigation = useNavigation()

  const items = products
  const restaurantId = Number(params.id)
  const restaurant = restaurants.find(restaurant => restaurant.id === restaurantId)

  const renderProductCard: ListRenderItem<Product> = ({ item }) => {
    return (
      <ProductCard
        productId={item.id}
        description={item.description}
        imgURL={item.imgURL}
        title={item.name}
      />
    )
  }

  React.useEffect(() => {
    navigation.setOptions({ headerTitle: restaurant!.name })
  }, [])

  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        renderItem={renderProductCard}
        style={styles.productList}
        contentContainerStyle={styles.productListInnerContainer}
      />
    </View>
  )
}
export default RestaurantScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.white[0],
  },
  productList: {
    flex: 1,
  },
  productListInnerContainer: {
    flex: 1,
    gap: 16,
  },
})

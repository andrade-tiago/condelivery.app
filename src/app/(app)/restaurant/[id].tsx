import LoadingScreen from "@/components/LoadingScreen"
import ProductCard from "@/components/ProductCard"
import Colors from "@/constants/colors"
import { Product } from "@/content/products"
import useProducts from "@/hooks/use-products"
import useRestaurant from "@/hooks/use-restaurant"
import { useLocalSearchParams, useNavigation } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type Params = {
  id: string,
}

const RestaurantScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<Params>()
  const restaurantId = Number(params.id)
  
  const navigation = useNavigation()

  const restaurant = useRestaurant({ id: restaurantId })
  const products = useProducts()

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
    if (restaurant.isLoading) { return }

    navigation.setOptions({ headerTitle: restaurant.data!.name })
  }, [ restaurant.isLoading ])

  if (restaurant.isLoading || products.isLoading) {
    return <LoadingScreen />
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={products.data}
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

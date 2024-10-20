import AddressArea from "@/components/AddressArea"
import Banner from "@/components/Banner"
import LoadingScreen from "@/components/LoadingScreen"
import ProductCard from "@/components/ProductCard"
import ProfileCard from "@/components/ProfileCard"
import SearchBar from "@/components/SearchBar"
import { H2 } from "@/components/Text"
import Colors from "@/constants/colors"
import { Product } from "@/content/products"
import { Restaurant } from "@/content/restaurants"
import useProducts from "@/hooks/use-products"
import useRestaurants from "@/hooks/use-restaurants"
import { Link, useLocalSearchParams, useNavigation } from "expo-router"
import React from "react"
import {
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View
} from "react-native"

type SearchParams = {
  name: string,
}

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation()
  const params = useLocalSearchParams<SearchParams>()
  const { width: screenWidth } = useWindowDimensions()

  const restaurants = useRestaurants()
  const products = useProducts()
  const bannerImg = 'https://static.pizzahut.pt/fotos/produtos/digitais_melts_oct_600x400_789969228670e23060133b.png'

  const renderRestaurantCardItem: ListRenderItem<Restaurant> = ({ item }) => {
    return (
      <Link href={`/(app)/restaurant/${item.id}`}>
        <ProfileCard
          imgURL={item.imgURL}
          title={item.name}
        />
      </Link>
    )
  }

  const renderProductCardItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <ProductCard
        description={item.description}
        imgURL={item.imgURL}
        productId={item.id}
        title={item.name}
        width={screenWidth * .8}
      />
    )
  }

  React.useEffect(() => {
    navigation.setOptions({ headerTitle: params.name })
  }, [])

  if (restaurants.isLoading) {
    return <LoadingScreen />
  }
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContentContainer}>
      <View style={styles.header}>
        <AddressArea />
      </View>

      <SearchBar />

      <Banner imgURL={bannerImg} />

      <View style={styles.section}>
        <H2>
          Restaurantes
        </H2>

        <FlatList horizontal
          data={restaurants.data}
          renderItem={renderRestaurantCardItem}
          style={styles.horizontalList}
          contentContainerStyle={styles.horizontalListContentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <H2>
          Pratos
        </H2>

        <FlatList horizontal
          data={products.data}
          renderItem={renderProductCardItem}
          style={styles.horizontalList}
          contentContainerStyle={styles.horizontalListContentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white[0],
  },
  screenContentContainer: {
    padding: 16,
    gap: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    width: '100%',
    gap: 12,
  },
  horizontalList: {
    width: '100%',
    overflow: 'visible',
  },
  horizontalListContentContainer: {
    gap: 24,
  },
})

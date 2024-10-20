import Banner from "@/components/Banner"
import LoadingScreen from "@/components/LoadingScreen"
import ProductCard from "@/components/ProductCard"
import ProfileCard from "@/components/ProfileCard"
import { H2, PrimaryText, SmallText } from "@/components/Text"
import Colors from "@/constants/colors"
import { Product } from "@/content/products"
import { Restaurant } from "@/content/restaurants"
import useProducts from "@/hooks/use-products"
import useRestaurants from "@/hooks/use-restaurants"
import { MaterialIcons } from "@expo/vector-icons"
import { Link, useLocalSearchParams, useNavigation } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, useWindowDimensions, View } from "react-native"

type SearchParams = {
  name: string,
}

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation()
  const params = useLocalSearchParams<SearchParams>()
  const { width: screenWidth } = useWindowDimensions()

  const restaurants = useRestaurants()
  const products = useProducts()

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
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.location}>
          <SmallText>
            Localização atual{" "}
            <MaterialIcons name="keyboard-arrow-down"
              size={10}
              color={Colors.neutral[700]}
            />
          </SmallText>

          <PrimaryText
            numberOfLines={1}
            style={{ maxWidth: 200 }}
          >
            Avenida Santa Fé, 93 - Recanto Regina
          </PrimaryText>
        </View>
      </View>

      <Banner
        title="Alma de pastel"
        description="Alma de pastel é uma coisa muito boa nas terças-feiras"
        imgAlign="right"
        imgURL="https://static.vecteezy.com/system/resources/previews/026/537/482/original/hand-holding-ice-cream-on-transparent-background-generative-ai-free-png.png"
        backgroundColor={Colors.success[600]}
      />

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
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white[0],
    gap: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    gap: 8,
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

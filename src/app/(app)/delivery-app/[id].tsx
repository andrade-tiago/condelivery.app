import Banner from "@/components/Banner"
import ProfileCard from "@/components/ProfileCard"
import { H2, PrimaryText, SmallText } from "@/components/Text"
import Colors from "@/constants/colors"
import restaurants, { Restaurant } from "@/content/restaurants"
import { MaterialIcons } from "@expo/vector-icons"
import { useLocalSearchParams, useNavigation } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type SearchParams = {
  name: string,
}

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation()
  const params = useLocalSearchParams<SearchParams>()

  const items = restaurants
  const renderItem: ListRenderItem<Restaurant> = ({ item }) => (
    <ProfileCard
      imgURL={item.imgURL}
      title={item.name}
    />
  )

  React.useEffect(() => {
    navigation.setOptions({ headerTitle: params.name })
  }, [])

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

      <View style={styles.deliveryAppsSection}>
        <H2>
          Restaurantes
        </H2>

        <FlatList horizontal
          data={items}
          renderItem={renderItem}
          style={styles.restaurantsList}
          contentContainerStyle={styles.restaurantsListContent}
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
  deliveryAppsSection: {
    width: '100%',
    gap: 12,
  },
  deliveryAppsList: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  restaurantsList: {
    width: '100%',
    overflow: 'visible',
  },
  restaurantsListContent: {
    gap: 24,
  },
})

import AddressArea from "@/components/AddressArea"
import Banner from "@/components/Banner"
import LoadingScreen from "@/components/LoadingScreen"
import ProfileCard from "@/components/ProfileCard"
import { H2 } from "@/components/Text"
import Colors from "@/constants/colors"
import { DeliveryApp } from "@/content/delivery-apps"
import useDeliveryApps from "@/hooks/use-delivery-apps"
import { Octicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

const Home: React.FunctionComponent = () => {
  const deliveryApps = useDeliveryApps()

  const bannerImg = 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3224072:1651227530/mc-picanha-divulgacao-1280x630.jpg'

  const renderDeliveryApp: ListRenderItem<DeliveryApp> = ({ item }) => {
    return (
      <Link key={item.id}
        href={{
          pathname: '/delivery-app/[id]',
          params: { id: item.id, name: item.name },
        }}
      >
        <ProfileCard
          imgURL={item.logoImgURL}
          title={item.name}
        />
      </Link>
    )
  }

  if (deliveryApps.isLoading) {
    return <LoadingScreen />
  }
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <AddressArea />

        <Link href="/(app)/notifications">
          <Octicons name="bell"
            size={24}
            color={Colors.neutral[700]}
          />
        </Link>
      </View>

      <Banner
        imgURL={bannerImg}
      />

      <View style={styles.deliveryAppsSection}>
        <H2>
          Apps disponíveis
        </H2>

        <FlatList
          data={deliveryApps.items}
          renderItem={renderDeliveryApp}
          horizontal
          style={styles.deliveryAppsList}
          contentContainerStyle={styles.deliveryAppsListInnerContainer}
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
  deliveryAppsSection: {
    width: '100%',
    gap: 12,
  },
  deliveryAppsList: {
    width: '100%',
  },
  deliveryAppsListInnerContainer: {
    minWidth: '100%',
    justifyContent: 'center',
    gap: 24,
  },
})

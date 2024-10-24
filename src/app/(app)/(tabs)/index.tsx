import AddressArea from "@/components/AddressArea"
import Banner from "@/components/Banner"
import LoadingScreen from "@/components/LoadingScreen"
import ProfileCard from "@/components/ProfileCard"
import RequestCard from "@/components/RequestCard"
import { H2 } from "@/components/Text"
import Colors from "@/constants/colors"
import { DeliveryApp } from "@/content/delivery-apps"
import useDeliveryApps from "@/hooks/use-delivery-apps"
import useRequests from "@/hooks/use-requests"
import { Octicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { FlatList, ListRenderItem, ScrollView, StyleSheet, View } from "react-native"

const Home: React.FunctionComponent = () => {
  const deliveryApps = useDeliveryApps()
  const requests = useRequests()

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

  if (deliveryApps.isLoading || requests.isLoading) {
    return <LoadingScreen />
  }

  const completedRequestsCards = requests.data?.filter(item => !item.completed).map(item => {
    return (
      <RequestCard key={item.id}
        appName={item.app}
        completed={item.completed}
        id={item.id}
        items={item.items}
        storeImgURL={item.storeImgURL}
        storeName={item.store}
      />
    )
  })

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContentContainer}>
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

      <View style={styles.section}>
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

      <View style={styles.section}>
        <H2>
          Seus pedidos
        </H2>

        <View style={styles.requestsList}>
          {completedRequestsCards}
        </View>
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
  deliveryAppsList: {
    width: '100%',
  },
  deliveryAppsListInnerContainer: {
    minWidth: '100%',
    justifyContent: 'space-evenly',
    gap: 24,
  },
  requestsList: {
    width: '100%',
    gap: 8,
  },
})

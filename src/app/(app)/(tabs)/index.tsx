import Banner from "@/components/Banner"
import ProfileCard from "@/components/ProfileCard"
import { H2, PrimaryText, SmallText } from "@/components/Text"
import Colors from "@/constants/colors"
import deliveryApps from "@/content/delivery-apps"
import { MaterialIcons, Octicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { StyleSheet, View } from "react-native"

const Home: React.FunctionComponent = () => {
  const deliveryAppsCards: React.JSX.Element[] =
    deliveryApps.map((app) => (
      <ProfileCard key={app.id}
        imgURL={app.logoImgURL}
        title={app.name}
      />
    ))

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

        <Link href="/(app)/notifications">
          <Octicons name="bell"
            size={24}
            color={Colors.neutral[700]}
          />
        </Link>
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
          Apps disponíveis
        </H2>

        <View style={styles.deliveryAppsList}>
          {deliveryAppsCards}
        </View>
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
})

import Notification, { NotificationProps } from "@/components/Notification"
import RequestCard from "@/components/RequestCard"
import { BoldText, SecondaryText } from "@/components/Text"
import Colors from "@/constants/colors"
import requests from "@/content/requests"
import { Feather } from "@expo/vector-icons"
import { useLocalSearchParams } from "expo-router"
import { StyleSheet, View } from "react-native"

type Params = {
  id: string,
}

const RequestStatusScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<Params>()

  const requestId = Number(params.id)
  const request = requests.find(request => request.id === requestId)!

  const notificationsProps: NotificationProps[] = [
    { text: 'Chegou no condomínio', time: new Date() },
    { text: 'Está com o entregador', time: new Date() },
    { text: 'Pedido entregue', time: new Date() },
  ]
  const notifications = notificationsProps.map((props, i) => {
    return <Notification key={i} {...props} />
  })

  return (
    <View style={styles.screen}>
      <RequestCard
        appName={request.app}
        completed={request.completed}
        id={request.id}
        items={request.items}
        storeImgURL={request.storeImgURL}
        storeName={request.store}
        hideButtons
      />

      <View style={styles.requestHistorySection}>
        <View style={styles.requestHistorySectionHeader}>
          <BoldText>
            Prazo
          </BoldText>

          <View style={styles.requestHistoryTimeSection}>
            <Feather name="clock" size={16} color={Colors.primary[300]} />

            <SecondaryText>
              45 minutos
            </SecondaryText>
          </View>
        </View>

        <View style={styles.notificationsSection}>
          {notifications}
        </View>
      </View>
    </View>
  )
}
export default RequestStatusScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    gap: 24,
    backgroundColor: Colors.white[0],
  },
  requestHistorySection: {
    gap: 10,
  },
  requestHistorySectionHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  requestHistoryTimeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  notificationsSection: {
    width: '100%',
    gap: 8,
  },
})
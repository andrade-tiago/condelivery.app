import Notification from "@/components/Notification"
import Colors from "@/constants/colors"
import { StyleSheet, View } from "react-native"

const NotificationsScreen: React.FunctionComponent = () => {
  const items =
    Array.from({ length: 7 }).map((_, i) => (
      <Notification key={i}
        text="Notificação"
        time={new Date(2024, 9 - 1, 19)}
      />
    ))

  return (
    <View style={styles.screen}>
      {items}
    </View>
  )
}
export default NotificationsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white[0],
    gap: 12,
  },
})

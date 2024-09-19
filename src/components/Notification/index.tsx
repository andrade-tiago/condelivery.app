import { StyleSheet, View } from "react-native"
import { PrimaryText, SecondaryText } from "../Text"
import dayjs from '@/lib/dayjs'

type NotificationProps = {
  text: string,
  time: Date,
}

const Notification: React.FunctionComponent<NotificationProps> = (props) => {
  const relativeTime: string = dayjs().to(props.time)

  return (
    <View style={styles.wrapper}>
      <PrimaryText
        style={styles.text}
        numberOfLines={1}
      >
        {props.text}
      </PrimaryText>
      <SecondaryText>
        {relativeTime}
      </SecondaryText>
    </View>
  )
}
export default Notification

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 8,
  },
  text: {
    flex: 1,
  },
})

import { Text, View } from "react-native"
import { getStyles } from "./styles"
import Message from "@/types/chat-message"

type ChatMessageProps = Message & {
  showTime?: boolean,
  rounded?: boolean,
}

const ChatMessage: React.FunctionComponent<ChatMessageProps> = (props) => {
  const styles = getStyles({
    role: props.role,
    rounded: !!props.rounded,
    showTime: !!props.showTime,
  })

  const time: string = 
    props.time.getHours().toString().padStart(2, '0') + ':' +
    props.time.getMinutes().toString().padStart(2, '0')

  return (
    <View style={styles.container}>
      <View style={styles.balloon}>
        <Text style={styles.text}>
          {props.text}
        </Text>
      </View>

      {props.showTime && (
        <Text style={styles.time}>
          {props.showTime && time}
        </Text>
      )}
    </View>
  )
}
export default ChatMessage

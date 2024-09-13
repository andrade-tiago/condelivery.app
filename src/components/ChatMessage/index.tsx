import ChatMessageRole from "@/types/chat-message-role"
import { Text, View } from "react-native"
import { getStyles } from "./styles"

type ChatMessageProps = {
  text: string,
  role: ChatMessageRole,
  time: Date,
}

const ChatMessage: React.FunctionComponent<ChatMessageProps> = (props) => {
  const styles = getStyles({ role: props.role })

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

      <Text style={styles.time}>
        {time}
      </Text>
    </View>
  )
}
export default ChatMessage

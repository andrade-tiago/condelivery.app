import Colors from "@/constants/colors"
import { StyleSheet, Text, View } from "react-native"

type ChatMessageProps = {
  text: string,
  role: 'user' | 'third',
  time: Date,
}

const ChatMessage: React.FunctionComponent<ChatMessageProps> = (props) => {
  const isFromUser: boolean = props.role === 'user'

  const styles = StyleSheet.create({
    container: {
      gap: 8,
      alignItems: isFromUser ? 'flex-end' : 'flex-start',
      width: '100%',
    },
    balloon: {
      backgroundColor: isFromUser ? Colors.primary[300] : Colors.primary[200],
      borderRadius: 12,
      borderTopLeftRadius: isFromUser ? 12 : 0,
      borderTopRightRadius: isFromUser ? 0 : 12,
      maxWidth: '85%',
      padding: 8,
    },
    text: {
      color: isFromUser ? Colors.white[0] : Colors.black[900],
      fontSize: 16,
    },
    time: {
      color: Colors.neutral[600],
      fontSize: 10,
    },
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

      <Text style={styles.time}>
        {time}
      </Text>
    </View>
  )
}
export default ChatMessage

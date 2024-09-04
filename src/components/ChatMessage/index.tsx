import Colors from "@/constants/colors"
import { StyleSheet, Text, View } from "react-native"

type ChatMessageProps = {
  text: string,
  fromThisUser?: boolean,
  time: Date,
}

const ChatMessage: React.FunctionComponent<ChatMessageProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      gap: 8,
      alignItems: props.fromThisUser ? 'flex-end' : 'flex-start',
      width: '100%',
    },
    balloon: {
      backgroundColor: props.fromThisUser ? Colors.orange : Colors.weakOrange,
      borderRadius: 12,
      borderTopLeftRadius: props.fromThisUser ? 12 : 0,
      borderTopRightRadius: props.fromThisUser ? 0 : 12,
      maxWidth: '85%',
      padding: 8,
    },
    text: {
      color: props.fromThisUser ? Colors.white : Colors.black,
      fontSize: 16,
    },
    time: {
      color: Colors.gray,
      fontSize: 10,
    },
  })

  const time = 
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

import Colors from "@/constants/colors"
import ChatMessageRole from "@/types/chat-message-role"
import { StyleSheet } from "react-native"

type ChatMessageStyleProps = {
  role: ChatMessageRole,
  rounded: boolean,
  showTime: boolean,
}

const getStyles = (props: ChatMessageStyleProps) => {
  const isFromUser: boolean = (props.role === 'user')

  return StyleSheet.create({
    container: {
      gap: 8,
      alignItems: (isFromUser ? 'flex-end' : 'flex-start'),
      width: '100%',
      paddingBottom: (props.showTime ? 0 : 4),
    },
    balloon: {
      backgroundColor: (isFromUser ? Colors.primary[300] : Colors.primary[200]),
      borderRadius: 12,
      borderTopLeftRadius: (isFromUser || props.rounded ? 12 : 0),
      borderTopRightRadius: (!isFromUser || props.rounded ? 12 : 0),
      maxWidth: '85%',
      padding: 8,
    },
    text: {
      color: (isFromUser ? Colors.white[0] : Colors.black[900]),
      fontSize: 16,
    },
    time: {
      color: Colors.neutral[600],
      fontSize: 10,
    },
  })
}

export { getStyles }

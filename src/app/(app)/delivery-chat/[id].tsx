import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"
import staticMessages from "@/content/chat"
import Message from "@/types/chat-message"
import ChatMessage from "@/components/ChatMessage"
import Input from "@/components/Input"
import Colors from "@/constants/colors"
import { Feather } from "@expo/vector-icons"
import React from "react"

const DeliveryChat: React.FunctionComponent = () => {
  const flatListRef = React.useRef<FlatList<Message>>(null)
  
  const [newMessageText, setNewMessageText] = React.useState<string>('')

  const messages = staticMessages

  const renderMessage: ListRenderItem<Message> = ({ item, index }) => {
    return (
      <ChatMessage {...item}
        rounded={messages[index - 1]?.role === item.role}
        showTime={messages[index + 1]?.role !== item.role}
      />
    )
  }

  const handleSend = () => {
    const messageContent = newMessageText.trim()

    if (!messageContent) {
      return
    }

    const newMessage: Message = {
      role: 'user',
      text: messageContent,
      time: new Date(),
    }

    messages.push(newMessage)
    flatListRef.current?.scrollToEnd({ animated: true })
    setNewMessageText('')
  }

  return (
    <View style={styles.screen}>
      <FlatList ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesInnerContainer}
      />
      <Input.Root variant="transparent">
        <Input.Field
          placeholder="Digite sua mensagem"
          onChangeText={setNewMessageText}
          value={newMessageText}
        />
        <Feather name="send"
          size={32}
          color={Colors.primary[300]}
          onPress={handleSend}
        />
      </Input.Root>
    </View>
  )
}
export default DeliveryChat

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  messages: {
    flex: 1,
  },
  messagesInnerContainer: {
    padding: 16,
  },
})

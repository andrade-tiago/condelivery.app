import ChatMessageRole from "./chat-message-role";

type ChatMessage = {
  text: string,
  role: ChatMessageRole,
  time: Date,
}

export default ChatMessage

import ChatMessage from "@/types/chat-message"

type Message = ChatMessage

const messages: Message[] = [
  {
    role: 'user',
    text: 'Olá! Tudo bem?',
    time: new Date(),
  },
  {
    role: 'third',
    text: 'Olá! Sim, e você?',
    time: new Date(),
  },
  {
    role: 'user',
    text: 'Bem, você está indo para a portaria?',
    time: new Date(),
  },
  {
    role: 'third',
    text: 'Sim, em breve estarei com seu pedido.',
    time: new Date(),
  },
  {
    role: 'user',
    text: 'Ok, muito obrigado!',
    time: new Date(),
  },
  {
    role: 'third',
    text: 'Por nada.',
    time: new Date(),
  },
]

export default messages

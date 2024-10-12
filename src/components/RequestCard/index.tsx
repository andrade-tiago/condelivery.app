import { RequestItem } from "@/content/requests"
import Card, { CardButtonProps, CardProps } from "../Card"
import currency from "@/lib/intl-currency"
import { useRouter } from "expo-router"

export type RequestCardProps = {
  appName: string;
  items: RequestItem[];
  storeName: string;
  completed: boolean;
  id: number;
  storeImgURL: string;
  hideButtons?: boolean;
}

const RequestCard: React.FunctionComponent<RequestCardProps> = (props) => {
  const router = useRouter()
  
  const totalCost = props.items.reduce((sum, item) => sum + item.price, 0)

  const totalItems = props.items.length

  const quantityTerm = (totalItems === 1) ? 'item' : 'itens'

  const listMarker = String.fromCharCode(9432)

  const buttonsIfCompleted: CardButtonProps[] = [
    {
      text: 'Pedir novamente',
    },
    {
      text: 'Avaliado',
    },
  ]
  const buttonsIfActive: CardButtonProps[] = [
    {
      text: 'Chat',
      onPress: () => router.push(`/delivery-chat/${props.id}`),
    },
    {
      text: 'Acompanhar',
    },
  ]

  const cardProps: CardProps = {
    title: props.storeName,
    subtitle: `${props.appName} - ${totalItems} ${quantityTerm}`,
    leftText: currency.format(totalCost),
    imgURL: props.storeImgURL,
  }
  if (!props.completed) { // don't show the items if request is completed
    cardProps.items = props.items.map(item => `${listMarker} ${item.title}`)
  }
  if (!props.hideButtons) {
    cardProps.buttons = props.completed ? buttonsIfCompleted : buttonsIfActive
  }

  return (
    <Card {...cardProps} />
  )
}
export default RequestCard

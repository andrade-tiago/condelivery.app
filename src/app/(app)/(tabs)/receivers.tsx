import Button, { ButtonProps, ButtonVariant } from "@/components/Button"
import Card, { CardButtonProps } from "@/components/Card"
import Colors from "@/constants/colors"
import { Receiver } from "@/content/receivers"
import useReceivers from "@/hooks/use-receivers"
import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type RequestsType = 'active' | 'completed'

const ReceiversScreen: React.FunctionComponent = () => {
  const [requestsTypeSelected, setRequestsTypeSelected] = useState<RequestsType>('active')
  const receiverList = useReceivers()
  const router = useRouter()

  const getButtonVariant = (requestType: RequestsType): ButtonVariant => {
    return requestType === requestsTypeSelected ? 'gradient' : 'outline'
  }

  const filterButtonsProps: ButtonProps[] = [
    {
      text: 'Ativos',
      variant: getButtonVariant('active'),
      onPress: () => setRequestsTypeSelected('active'),
    },
    {
      text: 'Concluídos',
      variant: getButtonVariant('completed'),
      onPress: () => setRequestsTypeSelected('completed'),
    },
  ]

  const filtersButtons = filterButtonsProps.map((buttonProps, i) => (
    <Button key={i} {...buttonProps} />
  ))

  const renderReceiverCard: ListRenderItem<Receiver> = ({ item }) => {
    const buttons: CardButtonProps[] = [
      {
        text: 'Chat',
        onPress: () => router.push(`/delivery-chat/${item.id}`),
      },
    ]

    return (
      <Card
        imgURL={item.imgURL}
        title={item.name}
        subtitle={item.locale}
        leftText={'#' + item.id}
        buttons={buttons}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {filtersButtons}
      </View>

      <FlatList
        data={receiverList.data}
        renderItem={renderReceiverCard}
        style={styles.cardList}
        contentContainerStyle={styles.cardListContentContainer}
      />
    </View>
  )
}
export default ReceiversScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white[0],
    paddingVertical: 24,
    gap: 18,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  cardBottomContentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  cardList: {
    flex: 1,
  },
  cardListContentContainer: {
    flex: 1,
    gap: 16,
    padding: 24,
  },
})

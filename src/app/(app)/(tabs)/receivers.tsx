import Button, { ButtonProps, ButtonVariant } from "@/components/Button"
import Card from "@/components/Card"
import { StrongText } from "@/components/Text"
import Colors from "@/constants/colors"
import receivers, { Receiver } from "@/content/receivers"
import { useRouter } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type RequestsType = 'active' | 'completed'

const ReceiversScreen: React.FunctionComponent = () => {
  const [requestsTypeSelected, setRequestsTypeSelected] = React.useState<RequestsType>('active')
  const router = useRouter()

  const receiverList = receivers

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

  const filtersButtons: React.JSX.Element[] = filterButtonsProps.map((buttonProps, i) => (
    <Button key={i} {...buttonProps} />
  ))

  const renderReceiverCard: ListRenderItem<Receiver> = ({ item }) => {
    const bottomContent = (
      <View style={styles.cardBottomContentContainer}>
        <Button
          text="Chat"
          onPress={() => router.push(`/delivery-chat/${item.id}`)}
          variant="white"
        />
      </View>
    )

    const leftContent = (
      <StrongText>
        #{item.id}
      </StrongText>
    )

    return (
      <Card
        imgURL={item.imgURL}
        title={item.name}
        subtitle={item.locale}
        leftContent={leftContent}
        bottomContent={bottomContent}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {filtersButtons}
      </View>

      <FlatList
        data={receiverList}
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
    paddingHorizontal: 24,
  },
  cardListContentContainer: {
    flex: 1,
    gap: 16,
  },
})

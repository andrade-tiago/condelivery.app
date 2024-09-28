import Button, { ButtonProps, ButtonVariant } from "@/components/Button"
import RequestCard from "@/components/RequestCard"
import Colors from "@/constants/colors"
import requests, { Request } from "@/content/requests"
import { useRouter } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type RequestsType = 'active' | 'completed'

const RequestsScreen: React.FunctionComponent = () => {
  const router = useRouter()
  const [requestsTypeSelected, setRequestsTypeSelected] = React.useState<RequestsType>('active')

  const requestList = requests

  const getButtonVariant = (requestType: RequestsType): ButtonVariant => {
    return requestType === requestsTypeSelected ? 'gradient' : 'outline'
  }

  const buttonsProps: ButtonProps[] = [
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
  const filtersButtons = buttonsProps.map((buttonProps, i) => (
    <Button key={i} {...buttonProps} />
  ))

  const requestsToDisplay = requests.filter(request => {
    return (requestsTypeSelected === 'completed')
    ?  request.completed
    : !request.completed
  })

  const renderRequestCard: ListRenderItem<Request> = ({ item }) => {
    const buttons: Omit<ButtonProps, 'variant'>[] =
      requestsTypeSelected === 'active' ? [
        {
          text: 'Chat',
          onPress: () => router.push(`/delivery-chat/${item.id}`),
        },
        {
          text: 'Acompanhar',
        },
      ] : [
        {
          text: 'Pedir novamente',
        },
        {
          text: 'Avaliado',
        },
      ]

    return (
      <RequestCard
        request={item}
        buttons={buttons}
        showItems={requestsTypeSelected === 'active'}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {filtersButtons}
      </View>

      <FlatList
        data={requestsToDisplay}
        renderItem={renderRequestCard}
        style={styles.requestList}
        contentContainerStyle={styles.requestListContentContainer}
      />
    </View>
  )
}

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
  requestList: {
    flex: 1,
  },
  requestListContentContainer: {
    flex: 1,
    gap: 8,
    padding: 24,
  },
})

export default RequestsScreen

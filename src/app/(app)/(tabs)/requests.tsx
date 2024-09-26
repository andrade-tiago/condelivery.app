import Button, { ButtonProps, ButtonVariant } from "@/components/Button"
import RequestCard from "@/components/RequestCard"
import Colors from "@/constants/colors"
import requests from "@/content/requests"
import { useRouter } from "expo-router"
import React from "react"
import { StyleSheet, View } from "react-native"

type RequestsType = 'active' | 'completed'

const RequestsScreen: React.FunctionComponent = () => {
  const router = useRouter()
  const [requestsTypeSelected, setRequestsTypeSelected] = React.useState<RequestsType>('active')

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

  const requestsOnDisplay = requests.filter(request => {
    return (requestsTypeSelected === 'completed')
    ?  request.completed
    : !request.completed
  })

  const requestsCards = requestsOnDisplay.map(request => {
    const buttons: Omit<ButtonProps, 'variant'>[] =
      requestsTypeSelected === 'active' ? [
        {
          text: 'Chat',
          onPress: () => router.push('/delivery-chat/1'),
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
      <RequestCard key={request.id}
        request={request}
        buttons={buttons}
        showItems={requestsTypeSelected === 'active'}
      />
    )
  })

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {filtersButtons}
      </View>

      <View style={styles.requests}>
        {requestsCards}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white[0],
    padding: 24,
    gap: 18,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  requests: {
    gap: 8,
  }
})

export default RequestsScreen

import Button, { ButtonProps, ButtonVariant } from "@/components/Button"
import RequestCard from "@/components/RequestCard"
import Colors from "@/constants/colors"
import requests, { Request } from "@/content/requests"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type RequestType = 'active' | 'completed'

const RequestsScreen: React.FunctionComponent = () => {
  const [requestTypeSelected, setRequestTypeSelected] = React.useState<RequestType>('active')

  const requestList = requests

  const getButtonVariant = (requestType: RequestType): ButtonVariant => {
    return requestType === requestTypeSelected ? 'gradient' : 'outline'
  }

  const filterButtonsProps: ButtonProps[] = [
    {
      text: 'Ativos',
      variant: getButtonVariant('active'),
      onPress: () => setRequestTypeSelected('active'),
    },
    {
      text: 'Concluídos',
      variant: getButtonVariant('completed'),
      onPress: () => setRequestTypeSelected('completed'),
    },
  ]
  const filterButtons = filterButtonsProps.map((buttonProps, i) => (
    <Button key={i} {...buttonProps} />
  ))

  const requestsToDisplay = requestList.filter(request => {
    return (requestTypeSelected === 'completed')
    ?  request.completed
    : !request.completed
  })

  const renderRequestCard: ListRenderItem<Request> = ({ item }) => {
    return (
      <RequestCard
        appName={item.app}
        completed={item.completed}
        id={item.id}
        items={item.items}
        storeName={item.store}
        storeImgURL={item.storeImgURL}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {filterButtons}
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

import Button, { ButtonVariant } from "@/components/Button"
import LoadingScreen from "@/components/LoadingScreen"
import RequestCard from "@/components/RequestCard"
import { SecondaryText } from "@/components/Text"
import Colors from "@/constants/colors"
import { Request } from "@/content/requests"
import useRequests from "@/hooks/use-requests"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type RequestType = 'active' | 'completed'

const RequestsScreen: React.FunctionComponent = () => {
  const requests = useRequests()
  const [requestTypeSelected, setRequestTypeSelected] = React.useState<RequestType>('active')

  const getButtonVariantForRequestType = (requestType: RequestType): ButtonVariant => {
    return requestType === requestTypeSelected ? 'gradient' : 'outline'
  }

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

  const renderEmptyListComponent = () => {
    return (
      <SecondaryText>
        {requestTypeSelected === 'active'
          ? 'Quando houver pedidos em aberto, eles serão mostrados aqui'
          : 'Quando você concluir um pedido, ele aparecerá aqui'
        }
      </SecondaryText>
    )
  }

  if (requests.isLoading) {
    return <LoadingScreen />
  }

  const requestsToDisplay = requests.data!.filter(request => {
    return (requestTypeSelected === 'completed') ? request.completed : !request.completed
  })

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Button
          text="Ativos"
          variant={getButtonVariantForRequestType('active')}
          onPress={() => setRequestTypeSelected('active')}
        />
        <Button
          text="Concluídos"
          variant={getButtonVariantForRequestType('completed')}
          onPress={() => setRequestTypeSelected('completed')}
        />
      </View>

      <FlatList
        data={requestsToDisplay}
        renderItem={renderRequestCard}
        style={styles.requestList}
        contentContainerStyle={styles.requestListContentContainer}
        ListEmptyComponent={renderEmptyListComponent}
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

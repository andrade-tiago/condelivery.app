import Card from "@/components/Card"
import cards, { CreditCard } from "@/content/cards"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

const SavedCardsScreen: React.FunctionComponent = () => {
  const creditCards = cards

  const renderCard: ListRenderItem<CreditCard> = ({ item }) => {
    return (
      <Card
        title={item.number.replace(/\d{12}(\d{4})/, '**** **** **** $1')}
        subtitle={item.operator}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={creditCards}
        renderItem={renderCard}
        style={styles.cardList}
        contentContainerStyle={styles.cardListContentContainer}
      />
    </View>
  )
}
export default SavedCardsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 24,
    padding: 24,
  },
  cardList: {
    width: '100%',
  },
  cardListContentContainer: {
    flex: 1,
    gap: 12,
  }, 
})

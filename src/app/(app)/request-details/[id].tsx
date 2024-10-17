import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import ProductCard from "@/components/ProductCard"
import { BoldText, PrimaryText, SecondaryText, StrongText } from "@/components/Text"
import Colors from "@/constants/colors"
import products, { ProductAdditional } from "@/content/products"
import currency from "@/lib/intl-currency"
import { AntDesign } from "@expo/vector-icons"
import { useLocalSearchParams } from "expo-router"
import React, { startTransition } from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type Params = {
  id: string,
}

const RequestDetailsScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<Params>()
  const [quantity, setQuantity] = React.useState(1)

  const productId = Number(params.id)
  const product = products.find(product => product.id === productId)!

  const unitaryPriceText = currency.format(product.price)
  const quantityText = quantity.toString().padStart(2, '0')

  const renderProductAdditionalItem: ListRenderItem<ProductAdditional> = ({ item }) => {
    const itemPriceText = currency.format(item.price)

    return (
      <View style={styles.row}>
        <PrimaryText>
          {item.name}
        </PrimaryText>

        <View style={styles.group}>
          <PrimaryText>
            {itemPriceText}
          </PrimaryText>

          <Checkbox />
        </View>
      </View>
    )
  }

  const emptyListComponent = (
    <SecondaryText>
      Nenhum adicional encontrado.
    </SecondaryText>
  )

  const handleAdd = () => {
    setQuantity(state => state + 1)
  }
  const handleSubtract = () => {
    if (quantity === 1) { return }

    setQuantity(state => state - 1)
  }

  return (
    <View style={styles.screen}>
      <ProductCard
        productId={productId}
        description={product.description}
        imgURL={product.imgURL}
        title={product.name}
      />
      <View style={styles.row}>
        <StrongText style={styles.unitaryPriceText}>
          {unitaryPriceText}
        </StrongText>

        <View style={styles.group}>
          <AntDesign name="minus"
            size={20}
            color={Colors.primary[300]}
            onPress={handleSubtract}
          />

          <BoldText>
            {quantityText}
          </BoldText>

          <AntDesign name="plus"
            size={20}
            color={Colors.primary[300]}
            onPress={handleAdd}
          />
        </View>
      </View>

      <View style={styles.additionalProductSection}>
        <BoldText>
          Adicionais
        </BoldText>

        <FlatList
          data={product.additional}
          renderItem={renderProductAdditionalItem}
          style={styles.additionalProductsList}
          contentContainerStyle={styles.additionalProductsListInnerContainer}
          ListEmptyComponent={emptyListComponent}
        />
      </View>

      <Button
        variant="gradient"
        text="Ir para o pagamento"
        full
      />
    </View>
  )
}
export default RequestDetailsScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.white[0],
    flex: 1,
    padding: 24,
    gap: 16,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  unitaryPriceText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  additionalProductSection: {
    flex: 1,
    gap: 8,
  },
  additionalProductsList: {
    flex: 1
  },
  additionalProductsListInnerContainer: {
    gap: 8,
  },
})

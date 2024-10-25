import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import LoadingScreen from "@/components/LoadingScreen"
import ProductCard from "@/components/ProductCard"
import { BoldText, PrimaryText, SecondaryText, StrongText } from "@/components/Text"
import Colors from "@/constants/colors"
import { ProductAdditional } from "@/content/products"
import useProduct from "@/hooks/use-product"
import currency from "@/lib/intl-currency"
import { AntDesign } from "@expo/vector-icons"
import { useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"

type Params = {
  id: string,
}

const RequestDetailsScreen: React.FunctionComponent = () => {
  const router = useRouter()
  const params = useLocalSearchParams<Params>()
  const productId = Number(params.id)

  const product = useProduct({ id: productId })

  const [productQuantity, setProductQuantity] = React.useState<number>(1)
  const [additionalItemsIDs, setAdditionalItemsIDs] = React.useState<number[]>([])

  const addToQuantity = () => {
    setProductQuantity(state => state + 1)
  }
  const subtractFromQuantity = () => {
    if (productQuantity === 1) { return }

    setProductQuantity(state => state - 1)
  }
  const productQuantityText = productQuantity.toString().padStart(2, '0')

  const handleCheckAdditionalItem = (itemId: number) =>{
    setAdditionalItemsIDs(
      state => state.includes(itemId)
        ? state.filter(id => id !== itemId)
        : [...state, itemId]
    )
  }

  const renderProductAdditionalItem: ListRenderItem<ProductAdditional> = ({ item }) => {
    const itemUnitaryPriceText = currency.format(item.price)

    return (
      <View style={styles.row}>
        <PrimaryText>
          {item.name}
        </PrimaryText>

        <View style={styles.group}>
          <PrimaryText>
            {itemUnitaryPriceText}
          </PrimaryText>

          <Checkbox
            onPress={() => handleCheckAdditionalItem(item.id)}
            checked={additionalItemsIDs.includes(item.id)}
          />
        </View>
      </View>
    )
  }

  const emptyListComponent = (
    <SecondaryText>
      Nenhum adicional encontrado.
    </SecondaryText>
  )

  if (product.isLoading) {
    return <LoadingScreen />
  }

  const productUnitaryPriceText = currency.format(product.data!.price)

  const unitaryProductAdditionalItemsTotalCost = additionalItemsIDs.reduce((sum, id) => {
    const additionalItem = product.data!.additional.find(
      additional => additional.id === id
    )!

    return sum + additionalItem.price
  }, 0)

  const totalCost =
    (product.data!.price * productQuantity)
    + (unitaryProductAdditionalItemsTotalCost * productQuantity)

  const totalCostText = currency.format(totalCost)

  const handlePay = () => {
    router.push(`/(app)/payments?subtotal=${totalCost}`)
  }

  return (
    <View style={styles.screen}>
      <ProductCard
        productId={product.data!.id}
        description={product.data!.description}
        imgURL={product.data!.imgURL}
        title={product.data!.name}
        blockPressEvent
      />
      <View style={styles.row}>
        <StrongText style={styles.unitaryPriceText}>
          {productUnitaryPriceText}
        </StrongText>

        <View style={styles.group}>
          <AntDesign name="minus"
            size={26}
            color={Colors.primary[300]}
            onPress={subtractFromQuantity}
          />

          <BoldText>
            {productQuantityText}
          </BoldText>

          <AntDesign name="plus"
            size={26}
            color={Colors.primary[300]}
            onPress={addToQuantity}
          />
        </View>
      </View>

      <View style={styles.additionalProductSection}>
        <BoldText>
          Adicionais
        </BoldText>

        <FlatList
          data={product.data!.additional}
          renderItem={renderProductAdditionalItem}
          style={styles.additionalProductsList}
          contentContainerStyle={styles.additionalProductsListInnerContainer}
          ListEmptyComponent={emptyListComponent}
        />
      </View>

      <View style={styles.row}>
        <PrimaryText>
          Total:
        </PrimaryText>
        <BoldText>
          {totalCostText}
        </BoldText>
      </View>

      <Button full
        variant="gradient"
        text="Ir para o pagamento"
        onPress={handlePay}
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

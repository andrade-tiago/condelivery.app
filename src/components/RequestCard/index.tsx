import { Request } from "@/content/requests"
import Card from "../Card"
import Button, { ButtonProps } from "../Button"
import { SecondaryText, StrongText } from "../Text"
import { StyleSheet, View } from "react-native"
import currency from "@/lib/intl-currency"

type RequestCardProps = {
  request: Request,
  buttons?: Omit<ButtonProps, 'variant'>[],
  showItems: boolean,
}

const RequestCard: React.FunctionComponent<RequestCardProps> = (props) => {
  const totalCost = props.request.items.reduce((acc, item) => acc + item.price, 0)

  const totalItems = props.request.items.length

  const buttons = props.buttons?.map((buttonProps, i) => {
    return <Button key={i} variant="white" {...buttonProps} />
  })

  const items = props.request.items.map((item, i) => {
    return <SecondaryText key={i} children={item.title} />
  })

  const cardBottomContent = (
    <View style={styles.cardBottomContentContainer}>
      {props.showItems && (
        <View style={styles.itemsContainer}>
          {items}
        </View>
      )}
      {buttons && (
        <View style={styles.buttonsContainer}>
          {buttons}
        </View>
      )}
    </View>
  )

  const totalCostText = currency.format(totalCost)

  const totalCostComponent = (
    <StrongText>
      {totalCostText}
    </StrongText>
  )

  return (
    <Card
      title={props.request.store}
      subtitle={`${props.request.app} - ${totalItems} itens`}
      leftContent={totalCostComponent}
      bottomContent={cardBottomContent}
    />
  )
}
export default RequestCard

const styles = StyleSheet.create({
  itemsContainer: {
    gap: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  cardBottomContentContainer: {
    gap: 24,
  },
})

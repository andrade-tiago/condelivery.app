import Button from "@/components/Button"
import Card from "@/components/Card"
import { BoldText, PrimaryText } from "@/components/Text"
import Colors from "@/constants/colors"
import currency from "@/lib/intl-currency"
import { LinearGradient } from "expo-linear-gradient"
import { useLocalSearchParams } from "expo-router"
import { StyleSheet, View } from "react-native"

type Params = {
  subtotal: string,
}

const PaymentsScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<Params>()

  const subtotal = Number(params.subtotal)
  const deliveryFee = 5.0
  const totalCost = subtotal + deliveryFee

  return (
    <View style={styles.screen}>
      <View style={styles.requestOptions}>
        <Card
          title="Rua das flores, orquídea, 123 - 12a"
          subtitle="Entregar em"
          leftText="Editar"
        />
        <Card
          subtitle="Método de pagamento"
          title="Pix"
          leftText="Editar"
        />
      </View>

      <LinearGradient
        colors={[ Colors.primary[300], Colors.secondary[300] ] as string[]}
        start={[ 0, .5 ]}
        end={[ 1, .5 ]}
        style={styles.checkoutArea}
      >
        <View style={styles.checkoutAreaItems}>
          <View style={styles.row}>
            <PrimaryText style={styles.lightText}>
              Subtotal
            </PrimaryText>
            <PrimaryText style={styles.lightText}>
              {currency.format(subtotal)}
            </PrimaryText>
          </View>

          <View style={styles.row}>
            <PrimaryText style={styles.lightText}>
              Taxa de Entregas
            </PrimaryText>
            <PrimaryText style={styles.lightText}>
              {currency.format(deliveryFee)}
            </PrimaryText>
          </View>

          <View style={styles.row}>
            <BoldText style={styles.lightText}>
              Total
            </BoldText>
            <PrimaryText style={styles.lightText}>
              {currency.format(totalCost)}
            </PrimaryText>
          </View>
        </View>

        <Button full
          variant="white"
          text="Fazer meu pedido"
        />
      </LinearGradient>
    </View>
  )
}
export default PaymentsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    gap: 20,
    backgroundColor: Colors.white[0],
  },
  requestOptions: {
    width: '100%',
    gap: 16,
  },
  checkoutArea: {
    width: '100%',
    borderRadius: 8,
    padding: 16,
    gap: 16,
  },
  checkoutAreaItems: {
    width: '100%',
    gap: 6,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  lightText: {
    color: Colors.white[0],
  },
})

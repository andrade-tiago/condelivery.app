export type CreditCard = {
  operator: string,
  number: string,
}

const cards: CreditCard[] = [
  {
    operator: 'Mastercard',
    number: '1037193713361738',
  },
  {
    operator: 'Visa',
    number: '1234567812345678',
  },
  {
    operator: 'Paypal',
    number: '5162371582851388',
  },
  {
    operator: 'Apple Pay',
    number: '2897340998270122',
  },
]
export default cards

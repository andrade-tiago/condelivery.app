export type RequestItem = {
  title: string,
  price: number,
}

export type Request = {
  app: string,
  items: RequestItem[],
  store: string,
  completed: boolean,
  id: number,
  storeImgURL: string,
}

const requests: Request[] = [
  {
    id: 0,
    app: 'iFood',
    completed: false,
    items: [
      {
        price: 10.6,
        title: 'Esfiha de queijo',
      },
      {
        price: 20.5,
        title: 'Pizza de bauru',
      },
    ],
    store: 'Pizza Hut',
    storeImgURL: 'https://yt3.googleusercontent.com/ytc/AOPolaR0bfAa132btyYxM82Bb8p6oSNI60M66uBa-EiMNQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 1,
    app: 'iFood',
    completed: true,
    items: [
      {
        price: 4.99,
        title: 'Quibe',
      },
    ],
    store: 'Giraffas',
    storeImgURL: 'https://assets.deliveryinbox.com.br/images/establishments/giraffas.jpg',
  },
]
export default requests

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
    store: 'Girafas',
  },
]
export default requests

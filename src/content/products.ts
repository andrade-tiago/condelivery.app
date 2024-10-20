export type ProductAdditional = {
  id: number,
  name: string,
  price: number,
}

export type Product = {
  id: number,
  name: string,
  description: string,
  imgURL: string,
  price: number,
  additional: ProductAdditional[],
}

const additional: ProductAdditional[] = [
  {
    id: 0,
    name: 'Mocha',
    price: 2.5,
  },
  {
    id: 1,
    name: 'Chantilly',
    price: 2.5,
  },
]

const products: Product[] = [
  {
    id: 0,
    name: 'Mocha Frappuccino',
    description: 'Café, leite, gelo e calda de mocha, finalizado com chantilly e mocha.',
    imgURL: 'https://photosbydlee.com/wp-content/uploads/2018/01/Starbucks-White-Chocolate-Mocha.jpg',
    price: 29.9,
    additional: additional,
  },
  {
    id: 1,
    name: 'Big Mac',
    description: 'Dois hambúrgueres (100% carne bovina), alface americana, queijo processado sabor cheddar, molho especial, cebola, picles e pão com gergelim.',
    imgURL: 'https://luciliadiniz.com.br/wp-content/uploads/2015/09/info-big-mac-capa.jpg',
    price: 31.9,
    additional: [],
  },
  {
    id: 2,
    name: 'Batata Frita B. Cup',
    description: 'Um cone de batatas fritas estilo belga com cheddar e bacon.',
    imgURL: 'https://jornaldobelem.com.br/images/noticias/11124/28071006_B.Cup-2.jpg.jpg',
    price: 25.5,
    additional: [],
  },
]
export default products
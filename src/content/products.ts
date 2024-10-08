export type Product = {
  name: string,
  description: string,
  imgURL: string,
  price: number,
}

const products: Product[] = [
  {
    name: 'Mocha Frappuccino',
    description: 'Café, leite, gelo e calda de mocha, finalizado com chantilly e mocha.',
    imgURL: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1280h960/2017/09/FEA/55500_frappuccino.jpg',
    price: 29.9,
  },
  {
    name: 'Big Mac',
    description: 'Dois hambúrgueres (100% carne bovina), alface americana, queijo processado sabor cheddar, molho especial, cebola, picles e pão com gergelim.',
    imgURL: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSVCgY4Qbt9Fq6_iTqPg35PFzBhkkHkzfbrPhe0yAgJ8c6ZtQlRwlYsIxIJgLRf9Rwd',
    price: 31.9,
  },
  {
    name: 'Batata Frita B. Cup',
    description: 'Um cone de batatas fritas estilo belga com cheddar e bacon.',
    imgURL: 'https://gazetadasemana.com.br/images/noticias/125911/28071006_B.Cup-2.jpg.jpg',
    price: 25.5,
  },
]
export default products
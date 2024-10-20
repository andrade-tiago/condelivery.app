type Restaurant = {
  id: number,
  name: string,
  imgURL: string,
}

const restaurants: Restaurant[] = [
  {
    id: 0,
    name: 'Brasa',
    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyioHCy4mZVkK-Th9BoMwuMQ9oxpd425oeg',
  },
  {
    id: 1,
    name: 'Gringa',
    imgURL: 'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/de03b60d-5e7e-4361-800a-d38c73ffeb64/202006261013_Hap1_.jpeg',
  },
  {
    id: 2,
    name: 'Grão',
    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTPEyd39n9ru7gI8jF_aYkThlyR1LNgAUaA',
  },
  {
    id: 3,
    name: 'Starbucks',
    imgURL: 'https://upload.wikimedia.org/wikipedia/pt/0/0f/Starbucks_Corporation_Logo_2011.svg.png',
  },
  {
    id: 4,
    name: 'Pizza Hut',
    imgURL: 'https://yt3.googleusercontent.com/ytc/AOPolaR0bfAa132btyYxM82Bb8p6oSNI60M66uBa-EiMNQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 5,
    name: 'Giraffas',
    imgURL: 'https://assets.deliveryinbox.com.br/images/establishments/giraffas.jpg',
  },
]

export default restaurants
export { Restaurant }

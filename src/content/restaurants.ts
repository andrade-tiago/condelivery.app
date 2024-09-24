type Restaurant = {
  id: number,
  name: string,
  imgURL: string,
}

const restaurants: Restaurant[] = [
  {
    id: 0,
    name: 'Brasa',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Abu_Nawas_Beach_restaurant_-_Flickr_-_Al_Jazeera_English_%281%29.jpg/800px-Abu_Nawas_Beach_restaurant_-_Flickr_-_Al_Jazeera_English_%281%29.jpg',
  },
  {
    id: 1,
    name: 'Gringa',
    imgURL: 'https://cdn.goomer.com.br/website/base/9b8/619/251/6-dicas-para-deixar-o-seu-restaurante-moderno.jpeg',
  },
  {
    id: 2,
    name: 'Grão',
    imgURL: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
  },
  {
    id: 3,
    name: 'Starbucks',
    imgURL: 'https://www.pensarcursos.com.br/blog/wp-content/uploads/2021/02/900-473-mesas-cadeiras-restaurante.jpg',
  },
  {
    id: 4,
    name: 'Pizza Hut',
    imgURL: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/1b/7b/13/area-interna.jpg',
  },
  {
    id: 5,
    name: 'Girafas',
    imgURL: 'https://img.freepik.com/fotos-premium/renderizacao-interior-de-estilo-loft-3d-cafe-pub_751108-539.jpg',
  },
]

export default restaurants
export { Restaurant }

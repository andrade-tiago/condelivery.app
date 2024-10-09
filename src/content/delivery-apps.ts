export type DeliveryApp = {
  id: number,
  name: string,
  logoImgURL: string,
}

const deliveryApps: DeliveryApp[] = [
  {
    id: 0,
    name: 'iFood',
    logoImgURL: 'https://i.pinimg.com/564x/4d/03/a4/4d03a42a273fba12fab1004d387c1f1e.jpg',
  },
  {
    id: 1,
    name: 'Rappi',
    logoImgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Rappi_backgr_logo.png/600px-Rappi_backgr_logo.png',
  },
  {
    id: 2,
    name: 'Zé Delivery',
    logoImgURL: 'https://courier-images-web.imgix.net/static/img/meta_image.png',
  },
  {
    id: 3,
    name: 'Daki',
    logoImgURL: 'https://assets.unileversolutions.com/v1/99522848.png',
  },
]

export default deliveryApps

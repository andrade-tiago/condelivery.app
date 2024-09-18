import ImagesURLs from "@/constants/images-url"

type DeliveryApp = {
  id: number,
  name: string,
  logoImgURL: string,
}

const deliveryApps: DeliveryApp[] = [
  {
    id: 0,
    name: 'iFood',
    logoImgURL: ImagesURLs.ifoodLogo,
  },
  {
    id: 1,
    name: 'Rappi',
    logoImgURL: ImagesURLs.rappiLogo,
  },
  {
    id: 2,
    name: 'Zé Delivery',
    logoImgURL: ImagesURLs.zeDeliveryLogo,
  },
  {
    id: 3,
    name: 'Daki',
    logoImgURL: ImagesURLs.dakiLogo,
  },
]

export default deliveryApps

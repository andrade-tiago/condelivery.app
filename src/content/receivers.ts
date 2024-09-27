export type Receiver = {
  locale: string,
  name: string,
  imgURL: string,
  id: number,
}

const receivers: Receiver[] = [
  {
    locale: '46, Torre B',
    name: 'Gustavo',
    imgURL: 'https://cdn.mos.cms.futurecdn.net/vVpPSVV4UyiTaveBZujqif.png',
    id: 1234,
  },
  {
    locale: '123, Torre A',
    name: 'Rita',
    imgURL: 'https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg',
    id: 1253,
  },
  {
    locale: '42, Torre B',
    name: 'Anderson',
    imgURL: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
    id: 1362,
  },
]
export default receivers

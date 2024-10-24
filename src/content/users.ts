export type User = {
  id: number,
  name: string,
  email: string,
  imgURL: string,
  cpf: string,
  password: string,
}

const users: User[] = [
  {
    id: 1,
    name: 'Pedro Álvares',
    email: 'pedro-alvares@email.com',
    imgURL: 'https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg',
    cpf: '12345678900',
    password: '12345678',
  },
]
export default users

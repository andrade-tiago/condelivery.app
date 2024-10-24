import { create } from "zustand"

export type UserStore = {
  logged: boolean,
  setLogged: (logged: boolean) => void,

  email: string,
  setEmail: (email: string) => void,

  name: string,
  setName: (name: string) => void,

  profileImgURL: string,
  setProfileImgURL: (url: string) => void,

  cpf: string,
  setCPF: (cpf: string) => void,
}

const useUserStore = create<UserStore>((set) => {
  return {
    logged: false,
    setLogged: (logged: boolean) => set({ logged }),

    email: '',
    setEmail: (email: string) => set({ email }),

    name: '',
    setName: (name: string) => set({ name }),

    profileImgURL: '',
    setProfileImgURL: (url: string) => set({ profileImgURL: url }),

    cpf: '',
    setCPF: (cpf: string) => set({ cpf }),
  }
})
export default useUserStore

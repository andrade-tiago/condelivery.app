import { create } from "zustand"

export type LoginStore = {
  logged: boolean,
  setLogged: (logged: boolean) => void,
}

const useLoginStore = create<LoginStore>((set) => {
  return {
    logged: false,
    setLogged: (logged: boolean) => set({ logged }),
  }
})
export default useLoginStore

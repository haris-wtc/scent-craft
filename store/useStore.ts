import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UserState {
  userName: string
  setUserName: (name: string) => void
  hasFilledInput: boolean
  setHasFilledInput: (filled: boolean) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userName: "",
      setUserName: (name) => set({ userName: name }),
      hasFilledInput: false,
      setHasFilledInput: (filled) => set({ hasFilledInput: filled }),
    }),
    {
      name: "user-storage",
    },
  ),
)


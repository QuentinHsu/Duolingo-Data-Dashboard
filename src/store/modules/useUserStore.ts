import { defineStore } from 'pinia'

const initialState = (): Store.UserState => ({
  userId: '',
  authorization: '',
})

export const useUserStore = defineStore('user', {
  state: initialState,
  actions: {
    setUser(e: Store.UserState) {
      this.$state = e
    },
    reset() {
      this.$reset()
    },
  },
  persist: true,
})

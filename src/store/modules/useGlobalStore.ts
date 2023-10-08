import { defineStore } from 'pinia'

const initialState = (): Global.Feedback => ({
  loading: false,
  loadingMessage: '',
})

export const useGlobalStore = defineStore('global', {
  state: initialState,
  actions: {
    setLoading(e: boolean) {
      this.$state.loading = e
    },
    setLoadingMessage(e: string) {
      this.$state.loadingMessage = e
    },

    reset() {
      this.$reset()
    },
  },
})

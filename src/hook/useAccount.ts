import { ref } from 'vue'

import { GET_USER_API, USER_FIELDS } from '@/constants/request'
import { useUserStore } from '@/store/modules/useUserStore'
import { api as officeService } from '@/service/duolinguo'
import { useGlobalStore } from '@/store/modules/useGlobalStore'
const globalStore = useGlobalStore()
const userStore = useUserStore()

export function useAccount() {
  const loading = ref(false)

  async function getUser() {
    loading.value = true
    loading.value = false
    return
  }

  function checkAccount(userId: string, authorization: string): Promise<any> {
    return new Promise((resolve, reject) => {
      globalStore.setLoadingMessage('正在与 Duolinguo 核实您的信息')
      globalStore.setLoading(true)
      officeService.defaults.headers.common['Authorization'] = authorization
      officeService
        .get(`${GET_USER_API}/${userId}?fields=${USER_FIELDS}`)
        .then(res => {
          const { username, picture } = res.data
          globalStore.setLoading(false)
          const userInfo: Store.UserState = {
            userId,
            authorization,
            username,
            picture,
          }
          userStore.setUser(userInfo)
          resolve(res.data)
        })
        .catch(error => {
          globalStore.setLoading(false)
          reject(error)
        })
        .finally(() => {
          globalStore.setLoadingMessage('')
        })
    })
  }

  return { loading, getUser, checkAccount }
}

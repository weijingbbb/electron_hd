import { defineStore } from 'pinia'
import { ref } from 'vue'

type ConfigType = {
  deviceId: string
  page: 'camers' | 'setting'
  borderWidth: number
  borderColor: string
}

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref<ConfigType>({
      deviceId: '',
      page: 'camers',
      borderWidth: 0,
      borderColor: ''
    })
    const updateConfig = (deviceId: string = '', page: 'camers' | 'setting' = 'camers') => {
      if (deviceId) config.value.deviceId = deviceId
      if (page) config.value.page = page
    }

    return {
      config,
      updateConfig
    }
  },
  {
    persist: true
  }
)

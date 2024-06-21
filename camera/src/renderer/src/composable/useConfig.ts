import { defineStore } from 'pinia'
import { ref } from 'vue'

type ConfigType = {
  deviceId: string
  page: 'camera' | 'setting'
  borderWidth: number
  borderColor: string
  rounded: boolean | null
}

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref<ConfigType>({
      deviceId: '',
      page: 'camera',
      borderWidth: 0,
      borderColor: '',
      rounded: true
    })
    const updateConfig = (params: Partial<ConfigType>) => {
      console.log(config.value, params)
      config.value = {
        ...config.value,
        ...params
      }
      console.log(config.value)
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

<script setup lang="ts">
import { Config, GraphicDesign, Return } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/composable/useConfig'
import useDrag from '@renderer/composable/useDrag'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'

const { drag } = useDrag()
const { config } = useConfigStore()
drag.run()

const quit = () => {
  window.api.quit()
}

const changeRound = () => {
  config.rounded = !config.rounded
  if (config.rounded) window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
  else window.api.setWindowSize({ aspectRatio: 16 / 9, width: 500, height: 280 })
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <Config
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          fill="#fff"
          class="absolute z-10 hidden -translate-x-1/2 cursor-pointer top-5 left-1/2 group-hover:block"
          @click="config.page = 'setting'"
        />
        <graphic-design
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          fill="#fff"
          class="absolute z-10 hidden -translate-x-1/2 cursor-pointer bottom-5 left-1/2 group-hover:block"
          @click="changeRound"
        />
        <return
          v-if="config.page == 'setting'"
          theme="outline"
          size="24"
          fill="#fff"
          class="absolute z-10 -translate-x-1/2 cursor-pointer bottom-5 left-1/2"
          @click="config.page = 'camera'"
        />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'"></Camera>
        <Setting v-else></Setting>
      </section>
    </main>
  </Suspense>
</template>

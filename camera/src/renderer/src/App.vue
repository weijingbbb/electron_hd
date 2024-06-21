<script setup lang="ts">
import { Config, GraphicDesign } from '@icon-park/vue-next';
import { ref } from 'vue';
import Camera from './components/Camera.vue';
import Setting from './components/Setting.vue';

const page = ref('camera')

const changePae = () => {
  console.log('bbbb')
  if (page.value === 'camera') {
    page.value = 'setting'
  } else {
    page.value = 'camera'
  }
}
</script>

<template>
  <Suspense>
    <main class="relative">
      <section>
        <Config
          v-if="page === 'camera'"
          theme="outline"
          size="24"
          fill="#fff"
          class="absolute z-10 -translate-x-1/2 cursor-pointer left-1/2"
          @click="changePae"
        />
        <graphic-design
          v-if="page === 'setting'"
          theme="outline"
          size="24"
          fill="#fff"
          class="absolute bottom-0 z-10 -translate-x-1/2 cursor-pointer left-1/2"
          @click="changePae"
        />
      </section>
      <section>
        <Camera v-if="page === 'camera'"></Camera>
        <Setting v-else></Setting>
      </section>
    </main>
  </Suspense>
</template>

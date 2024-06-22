<template>
  <main
    class="w-screen h-screen overflow-hidden"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border: solid ${config.borderWidth}px ${config.borderColor};`"
  >
    <video class="object-cover w-full h-full" :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/composable/useConfig';
import { onMounted } from 'vue';

const { config } = useConfigStore()

onMounted(() => {
  const video = document.querySelector('video')!
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId
    }
  } as MediaStreamConstraints

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style lang="scss"></style>

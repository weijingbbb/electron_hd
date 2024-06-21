<template>
  <main class="flex w-screen h-screen">
    <video src="" class="object-cover "></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// const devices = await navigator.mediaDevices.enumerateDevices()
// console.log(devices)
onMounted(() => {
  const video = document.querySelector('video')!
  const constraints = {
    audio: false,
    video: true
  }

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style lang="scss"></style>

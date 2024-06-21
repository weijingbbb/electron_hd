<template>
  <main class="flex w-screen h-screen">
    <video src="" class="object-cover "></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const video = document.querySelector('video')!
  const constraints = {
    audio: false,
    video: {
      deviceId: 'b3cfdff36643a156c8518e57e368d8c794e83b2df1fc4620f81f6f0807b0c209'
    }
  } as MediaStreamConstraints

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style lang="scss"></style>

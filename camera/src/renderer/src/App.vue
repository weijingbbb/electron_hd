<script setup lang="ts">
import Camera from './components/Camera.vue';
import Setting from './components/Setting.vue';
</script>

<template>
  <Suspense>
    <main>
    <Camera></Camera>
    <Setting ></Setting>
    </main>
  </Suspense>
</template>

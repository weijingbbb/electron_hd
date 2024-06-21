<template>
  <main class="p-4 bg-[#2c3e50] w-screen h-screen">
    <h2 class="mb-5 text-sm text-center text-gray-50 opacity-70">参数配置</h2>
    <el-select v-model="config.deviceId" placeholder="选择摄像头" class="mb-5">
      <el-option
        v-for="item in cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
      />
    </el-select>
    <el-input v-model="config.borderWidth" placeholder="边框宽度"  clearable class="mb-5"></el-input>
    <el-input v-model="config.borderColor" placeholder="边框颜色"  clearable class="mb-5"></el-input>
  </main>
</template>
<script setup lang="ts">
import { useConfigStore } from '@renderer/composable/useConfig';
import { onMounted } from 'vue';

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => d.kind.includes('video'))
const { config } = useConfigStore()

onMounted(() => {})
</script>

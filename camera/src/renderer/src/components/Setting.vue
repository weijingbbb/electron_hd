<template>
  <main class="p-4 bg-[#2c3e50] w-screen h-screen">
    <h2 class="mb-5 text-sm text-center text-gray-50 opacity-70">参数配置</h2>
    <el-select v-model="deviceId" placeholder="选择摄像头">
      <el-option
        v-for="item in cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
      />
    </el-select>
    <el-button type="success" @click="onSubmit" class="w-full mt-4">保存</el-button>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => d.kind.includes('video'))
const deviceId = ref('')

console.log(cameras)
const onSubmit = () => {}

onMounted(() => {})
</script>

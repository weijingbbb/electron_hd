<template>
  <main class="bg-[#2c3e50] w-screen h-screen">
    <h2 class="mb-5 text-sm text-center text-gray-50 opacity-70">参数配置</h2>
    <el-form ref="form" label-width="80px">
      <el-form-item>
        <el-select v-model="deviceId" placeholder="选择摄像头">
          <el-option
            v-for="item in cameras"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
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

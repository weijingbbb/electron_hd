<template>
  <main>
    <el-form ref="form" label-width="80px" :inline="false" size="large">
      <el-form-item>
        <!-- <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
          <el-option
            v-for="item in cameras"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select> -->
      </el-form-item>
    </el-form>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => d.kind.includes('videoinput'))
const deviceId = ref('')

console.log(cameras)

onMounted(() => {})
</script>

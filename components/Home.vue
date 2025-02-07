<script lang="ts" setup>
// 获取当前年份
const year = new Date().getFullYear()
</script>

<template>
  <div class="bg-gray-200 rounded">
    <button class="hover:text-gray-500 font-bold py-2 px-4 rounded text-lg">ToolBox</button>
  </div>
  <div class="grid grid-cols-3 gap-y-2 mt-2">
    <div class="hover:bg-gray-200 py-2 px-4 rounded shadow mx-1 border border-gray-200">
      <router-link 
      to="/base64"
      >
      <div class="text-sm">编码转换</div>
      <div class="text-xs">Unicode,Base64 等编码转换</div>
      </router-link>
    </div>
  </div>
  <div class="text-right">
    <a href="https://www.toolbox.com" target="_blank" class="text-blue-500 hover:text-black">©2025-{{year}} ToolBox V0.0.1</a>
  </div>
  </template>

<style scoped>

</style>

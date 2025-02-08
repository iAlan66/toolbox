<script lang="ts" setup>
</script>

<template>
  <div class="bg-gray-200 h-8">
    <button class="hover:text-gray-500 py-1 px-2 rounded text-base">ToolBox</button>
  </div>
  <div class="grid grid-cols-3 gap-y-2 mt-2">
    <div class="hover:bg-gray-200 py-2 px-4 rounded shadow mx-1 border border-gray-200 group">
      <router-link 
      to="/base64"
      >
      <div class="text-sm text-blue-400 group-hover:text-black">编码转换</div>
      <div class="text-xs text-gray-500">Unicode,Base64 等编码转换</div>
      </router-link>
    </div>
    <div class="hover:bg-gray-200 py-2 px-4 rounded shadow mx-1 border border-gray-200 group">
      <router-link 
      to="/qrcode"
      >
      <div class="text-sm text-blue-400 group-hover:text-black">二维码生成器</div>
      <div class="text-xs text-gray-500">可自定义内容生成二维码。</div>
      </router-link>
    </div>
  </div>
  </template>

<style scoped>

</style>

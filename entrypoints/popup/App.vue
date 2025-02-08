<script lang="ts" setup>
// 获取当前年份
const year = new Date().getFullYear()
</script>

<template>
  <router-view></router-view>
  <div class="text-right">
    <a href="https://www.toolbox.com" target="_blank" class="text-blue-400 hover:text-black">©2025-{{year}} ToolBox V0.0.2</a>
  </div>
</template>

<style scoped>

</style>

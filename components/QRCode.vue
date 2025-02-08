<template>
  <div class="bg-gray-200 h-8 flex justify-between">
    <button
    class=" 
    hover:text-blue-500  
    py-1 
    px-1
    text-base 
    transition 
    duration-300 
    ease-in-out" 
    @click="$router.push('/')">＜返回工具选择
    </button>
    <div class="text-base text-gray-500 p-1">二维码生成器</div>
  </div>
  <div>
      <textarea
      v-model="qrText"
      placeholder="请输入内容"
      class="
        block
        rounded-md
        border
        border-black
        shadow-sm
        focus:border-indigo-500
        focus:ring-indigo-500
        sm:text-sm
        py-2
        px-3
        text-gray-700
        placeholder-gray-400
        w-[calc(100%-0.5rem)]
        m-1
      "
      >
      </textarea>
  </div>
  <div class="flex justify-between">
    <div class="m-1">
      <label for="size">尺寸:</label>
      <input v-model="qrSize" type="number" id="size" class="border border-black ml-1 w-10 rounded"/>
    </div>
    <div class="flex m-1">
    <label for="foreground">前景色:</label>
    <input
      type="color"
      id="foreground"
      class="border border-black ml-1 w-10 h-5 rounded"
      v-model="foreground"
    />
    </div>
    <div class="flex m-1">
    <label for="background">背景色:</label>
    <input
      type="color"
      id="background"
      class="border border-black ml-1 w-10 h-5 rounded"
      v-model="background"
    />
    </div>
    <button @click="generate" class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-1 m-1">生成二维码</button>
  </div>
  <div v-if="showQrCode" class="flex justify-center text-right">
    <qrcode
      :value="qrText"
      :size="qrSize"
      :foreground="foreground"
      :background="background"
    />
  </div>
</template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import qrcode from 'qrcode.vue'
  
  const qrText = ref('')
  const showQrCode = ref(false)
  const qrSize = ref(100) // 定义Size
  const foreground = ref('#000000') 
  const background = ref('#ffffff')
  
  const generate = () => {
    showQrCode.value = qrText.value !== ''
  }
  </script>
  
  <style scoped>
  qrcode {
    margin-top: 20px;
  }
  </style>
  
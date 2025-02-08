<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
const output = ref('')

function base64Encode() {
  output.value = btoa(input.value)
}

function base64Decode() {
  try {
    output.value = atob(input.value)
  } catch (error) {
    output.value = '解码失败：输入不是有效的Base64字符串'
  }
}

function unicodeEncode() {
}
  output.value = encodeURIComponent(input.value)

function unicodeDecode() {
  output.value = decodeURIComponent(input.value)
}

function asciiEncode() {
  output.value = input.value.split('')
    .map(char => char.charCodeAt(0))
    .join(' ')
}

function asciiDecode() {
  try {
    output.value = input.value.split(' ')
      .map(code => String.fromCharCode(Number(code)))
      .join('')
  } catch (error) {
    output.value = '解码失败：输入不是有效的ASCII编码'
  }
}

function urlEncode() {
  output.value = encodeURI(input.value)
}

function urlDecode() {
  try {
    output.value = decodeURI(input.value)
  } catch (error) {
    output.value = '解码失败：输入不是有效的URL编码'
  }
}


function clear() {
  input.value = ''
  output.value = ''
}
</script>

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
    <div class="text-base text-gray-500 p-1">编码转换</div>
  </div>
  <div class="">
    <textarea
      v-model="input"
      placeholder="输入要编码/解码的字符串"
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
    ></textarea>
    <div class = "grid grid-cols-4">
      <div class="m-1">
        <button @click="base64Encode" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded m-1">Base64 编码</button>
        <button @click="base64Decode" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded m-1">Base64 解码</button>
      </div>
      <div class="m-1">
        <button @click="unicodeEncode" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded m-1">Unicode 编码</button>
        <button @click="unicodeDecode" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded m-1">Unicode 解码</button>
      </div>
      <div class="m-1">
        <button @click="asciiEncode" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded m-1">ASCII 编码</button>
        <button @click="asciiDecode" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded m-1">ASCII 解码</button>
      </div>
      <div class="m-1">
        <button @click="urlEncode" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded m-1">URL 编码</button>
        <button @click="urlDecode" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded m-1">URL 解码</button>
      </div>
    </div>
    <div class="text-right m-1">
      <button @click="clear" class="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-1 rounded m-1">清空内容</button>
    </div>

    <textarea
      readonly
      v-model="output"
      placeholder="编码/解码结果将显示在这里"
      class="
        box-border
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
    ></textarea>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'

const colorMode = useColorMode()
const theme = computed(() => (colorMode.value === 'dark' ? darkTheme : null))
</script>

<template>
  <NConfigProvider class="h-full" :theme="theme">
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped></style>

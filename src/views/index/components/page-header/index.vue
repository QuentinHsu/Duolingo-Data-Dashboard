<script setup lang="ts">
import { Icon } from '@iconify/vue'
import moonBold from '@iconify-icons/ph/moon-bold'
import sunBold from '@iconify-icons/ph/sun-bold'
import { useColorMode } from '@vueuse/core'

interface IconifyIcons {
  body: string
  height?: number
  width?: number
}
type Icons = Record<string, IconifyIcons>
const icons: Icons = {
  sunBold,
  moonBold,
}

interface ColorOption {
  label: string
  value: typeof colorMode.value
}
const c = useColorMode()
const { store: colorMode } = useColorMode()
const colorModeOptions: ColorOption[] = [
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Auto',
    value: 'auto',
  },
]
function changeColorMode(value: ColorOption['value']) {
  colorMode.value = value
}
</script>

<template>
  <NLayoutHeader class="page-header">
    <div class="header-info">
      <img class="_3fRMw" src="https://design.duolingo.com/86230c9ad10d9f08b785.svg" />
      <div class="header-info-title">Duolingo Data Dashboard</div>
    </div>

    <div>
      <NPopselect
        :options="colorModeOptions"
        trigger="click"
        :value="colorMode"
        @update:value="changeColorMode"
      >
        <NButton circle class="cursor-pointer text-[20px]" quaternary>
          <template #icon>
            <Icon v-show="c === 'light'" :icon="icons.sunBold" />
            <Icon v-show="c === 'dark'" :icon="icons.moonBold" />
          </template>
        </NButton>
      </NPopselect>
    </div>
  </NLayoutHeader>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 10px;
  .header-info {
    display: flex;
    align-items: center;
    ._3fRMw {
      display: initial;
      height: 40px;
      width: 40px;
    }
    &-title {
      font-weight: 700;
      margin-left: 10px;
    }
  }
}
</style>

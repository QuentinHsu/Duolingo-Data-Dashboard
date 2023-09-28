<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

const message = useMessage()
function handleUpdateValue(key: string, item: MenuOption) {
  message.info(`[onUpdate:value]: ${JSON.stringify(key)}`)
  message.info(`[onUpdate:value]: ${JSON.stringify(item)}`)
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'xp-summaries',
          },
        },
        { default: () => '经验' }
      ),
    key: 'go-back-home',
  },
]
</script>

<template>
  <NLayoutSider class="side-menu" content-style="padding: 24px;">
    <NMenu :options="menuOptions" @update:value="handleUpdateValue" />
  </NLayoutSider>
</template>

<style lang="scss" scoped></style>

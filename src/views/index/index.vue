<script setup lang="ts">
import { computed } from 'vue'
import PageHeader from './components/page-header/index.vue'
import SideMenu from './components/side-menu/index.vue'
import { useGlobalStore } from '@/store/modules/useGlobalStore.ts'
const globalStore = useGlobalStore()
const showModalLoading = computed(() => globalStore.$state.loading)
const loadingMessage = computed(() => globalStore.$state.loadingMessage || '')
import { useMessage } from 'naive-ui'
// @ts-ignore
window.$message = useMessage()
</script>

<template>
  <NLayout>
    <PageHeader />
    <NLayout class="page-body" has-sider>
      <SideMenu />
      <div class="page-content">
        <RouterView />
      </div>
    </NLayout>
  </NLayout>
  <n-modal v-model:show="showModalLoading" :mask-closable="false">
    <n-spin size="large">
      <template #description>
        {{ loadingMessage }}
      </template>
    </n-spin>
  </n-modal>
</template>

<style lang="scss" scoped>
.page-body {
  height: calc(100vh - 64px);
  .page-content {
    padding: 20px;
  }
}
</style>

<script setup lang="ts">
import PageHeader from './components/page-header/index.vue'
import SideMenu from './components/side-menu/index.vue'
</script>

<template>
  <NLayout>
    <PageHeader />
    <NLayout class="page-content" has-sider>
      <SideMenu />
      <RouterView />
    </NLayout>
  </NLayout>
</template>

<style lang="scss" scoped>
.page-content {
  height: calc(100vh - 64px);
}
</style>

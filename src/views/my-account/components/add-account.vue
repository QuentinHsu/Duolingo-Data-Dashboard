<script setup lang="ts">
import { useAccount } from '@/hook/useAccount'

import { ref } from 'vue'
import { useGlobalStore } from '@/store/modules/useGlobalStore'

const showDialog = ref(false)
const account = useAccount()

// 表单数据
const form = ref({
  userId: '',
  authorization: '',
})
const accountInfo = ref({
  username: '',
  picture: '',
})
const showFromAdd = ref(true)
// 提交逻辑
async function handleSubmit() {
  const globalStore = useGlobalStore()
  globalStore.setLoading(true)
  const { username, picture } = await account.checkAccount(
    form.value.userId,
    form.value.authorization
  )
  accountInfo.value.username = username
  accountInfo.value.picture = picture
  showFromAdd.value = false
  return
}
const onClose = () => {
  showDialog.value = false
}
const onModalAfterLeave = () => {
  showFromAdd.value = true
  form.value = {
    userId: '',
    authorization: '',
  }
}
</script>

<template>
  <NButton @click="showDialog = true">新增</NButton>

  <NModal v-model:show="showDialog" :mask-closable="false" :on-after-leave="onModalAfterLeave">
    <!-- 表单代码 -->
    <NCard class="form-add-account">
      <NForm v-if="showFromAdd">
        <NFormItem label="用户 ID">
          <NInput v-model:value="form.userId" />
        </NFormItem>

        <NFormItem label="Token">
          <NInput v-model:value="form.authorization" />
        </NFormItem>

        <NFormItem>
          <NButton @click="handleSubmit">提交</NButton>
        </NFormItem>
      </NForm>
      <template v-else>
        <n-result status="success" :title="accountInfo.username" description="校验成功">
          <template #footer>
            <n-button @click="onClose">Enjoy</n-button>
          </template>
        </n-result>
      </template>
    </NCard>
  </NModal>
</template>

<style lang="scss">
.form-add-account {
  width: 40%;
}
</style>

import { MessageType } from 'naive-ui'
declare namespace Global {
  type Feedback = {
    loading: boolean
    loadingMessage: string
  }
}
declare global {
  interface Window {
    $message: MessageType
  }
}

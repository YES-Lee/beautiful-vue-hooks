import useGlobalEvent from './useGlobalEvent'
import { ref } from '@vue/composition-api'

/**
 * 使用 [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
 * 来检测浏览器是否连接网络
 * whether the browser is connected or not.
 * 如果浏览器不支持`navigator.onLine`接口，则默认返回`true`
 */
export default function useOnlineState () {
  const isSupported = typeof window !== 'undefined' && 'ononline' in window
  const isOnline = ref(isSupported ? navigator.onLine : true)
  const whenOnline = useGlobalEvent('online', { capture: true })
  const whenOffline = useGlobalEvent('offline', { capture: true })

  if (!isSupported) {
    console.warn('The current device does not support the \'online/offline\' events, you should avoid using useOnlineState')
    return isOnline
  }

  whenOnline(() => {
    isOnline.value = true
  })

  whenOffline(() => {
    isOnline.value = false
  })

  return isOnline
}

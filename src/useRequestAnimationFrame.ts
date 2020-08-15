import createHandlerSetter from './utils/createHandlerSetter'
import isClient from './utils/isClient'
import isAPISupported from './utils/isAPISupported'
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy'
import { ref } from '@vue/composition-api'

const defaultOptions = { increment: 1, startAt: 0, finishAt: 100 }

const errorMessage = 'requestAnimationFrame is not supported, this could happen both because '
  + 'window.requestAnimationFrame is not supported by your current browser version or you\'re using the '
  + 'useRequestAnimationFrame hook whilst server side rendering.'

export default function useRequestAnimationFrame (func: any, options = defaultOptions) {
  if (!isClient || !isAPISupported('requestAnimationFrame')) {
    // eslint-disable-next-line no-console
    console.warn(errorMessage)
    return createCbSetterErrorProxy(errorMessage)
  }

  const opts = { ...defaultOptions, ...options }
  const progress = ref(opts.startAt)
  const [onFinish, setOnFinish] = createHandlerSetter()

  const next = () => window.requestAnimationFrame(step)

  const step = () => {
    if (progress.value <= opts.finishAt || opts.finishAt === -1) {
      func(progress.value, next)
      progress.value += opts.increment
    } else if (onFinish.value) {
      onFinish.value()
    }
  }

  if (progress.value <= opts.startAt) {
    next()
  }

  return setOnFinish
}

import throttle from 'lodash.throttle'

const defaultOptions = {
  leading: false,
  trailing: true,
}

export default function useThrottledFn (fn: any, wait = 100, options = defaultOptions) {
  return throttle(fn, wait, options)
}

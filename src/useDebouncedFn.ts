import debounce from 'lodash.debounce'

const defaultOptions = {
  leading: false,
  trailing: true,
}

const useDebouncedFn = (fn: any, wait = 100, options = defaultOptions) => {
  return debounce(fn, wait, options)
}

export default useDebouncedFn

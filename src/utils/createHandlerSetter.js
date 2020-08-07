import { ref } from '@vue/composition-api'
/**
 * 返回一个数组，第一个元素是一个函数，第二个元素是用来设置第一个函数的函数，有点类似于react中的useState，
 * 只不过这里的值是一个函数
 */
const createHandlerSetter = (handlerValue) => {
  const handlerRef = ref(handlerValue);

  // since ref accepts an initial-value only, this is needed to make sure
  handlerRef.value = handlerValue;

  const setHandler = (nextCallback) => {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function');
    }

    handlerRef.value = nextCallback;
  };

  return [handlerRef, setHandler];
};

export default createHandlerSetter;
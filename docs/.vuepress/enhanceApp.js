import CompositionApi from '@vue/composition-api'
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css' 


export default ({
  Vue
}) => {
  Vue.use(CompositionApi)
  Vue.prototype.$highlight = el => {
    hljs.highlightBlock(el)
  }
  Vue.directive('highlight',function (el) {
    hljs.highlightBlock(el)
  })
}
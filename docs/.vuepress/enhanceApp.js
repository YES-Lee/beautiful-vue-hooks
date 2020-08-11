import CompositionApi from '@vue/composition-api'
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css' 


export default ({
  Vue
}) => {
  Vue.use(CompositionApi)
  Vue.directive('highlight',function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  })
}
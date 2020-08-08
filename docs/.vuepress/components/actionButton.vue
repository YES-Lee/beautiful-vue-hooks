<template>
  <a class="action-button" :href="link">
    {{title}}
  </a>
</template>
<script>
export default {
  props: {
    link: String,
    title: String
  }
}
</script>
<style scoped>
.action-button {
  margin: 0 auto;
  width: fit-content;
  display: block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: .8rem 1.6rem;
  border-radius: 4px;
  transition: background-color .1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>
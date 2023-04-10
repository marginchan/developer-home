<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <IndexPage/>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import IndexPage from '@/components/layout/IndexPage.vue'

export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    }
  },
  components: {
    IndexPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

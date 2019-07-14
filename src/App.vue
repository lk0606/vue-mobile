<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import cTable from '@/components/table/c-table.vue'

  export default Vue.extend({
    name: 'home',
    components: {
      cTable
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {
      initSize() {
        if (window.innerWidth <= 320) {
          document.getElementsByTagName('html')[0].style.fontSize = '20px'
        } else {
          document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth * 40 / 750) + 'px'
        }
      }
    },
    created() {
    },
    mounted() {
      this.initSize()
      window.addEventListener('resize', this.initSize())
    }
  })
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>

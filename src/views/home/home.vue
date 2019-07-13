<template>
<div class='home-container'>
  <mt-cell
      v-for="(item, index) in cell" :key="index"
      :title="item.title"
      :to="item.url"
      is-link
      :value="item.rightText">
  </mt-cell>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  components: {
  },
  data() {
      return {
        cell: [
          {
            title: '原生滚动',
            url: '/tt',
            rightText: '头部固定'
          },
          {
            title: 'translate滚动',
            url: '/iscroll-table-test',
            rightText: '头部侧边可以固定'
          },
          {
            title: '项目中的',
            url: '/test',
            rightText: '可固定'
          },
        ]
      }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
  },
  mounted() {
  }
})
</script>

<style lang="scss" scoped>
.home-container {

}
</style>
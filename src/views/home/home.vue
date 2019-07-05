<template>
<div class='home-container'>
  <cTable
      :title="title"
  ></cTable>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import cTable from '@/components/c-table.vue'

export default Vue.extend({
  name: 'home',
  components: {
      cTable
  },
  data() {
      return {
        title: '利益展示'
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
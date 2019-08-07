<template>
  <div class="table-demo-container">
    <cTable
        class="c-table"></cTable>
  </div>
</template>

<script>
  import cTable from './index'
  export default {
    name: 'table-demo',
    components: {
      cTable
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .table-demo-container {
  }
</style>
<style lang="scss">
  .c-table {
    .table-row-odd {
      background: red;
    }
  }
</style>
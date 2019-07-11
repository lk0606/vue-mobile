<template>
  <div class='test-container'>
    <cTable :itemData="policyData" key="policy" type="table"></cTable>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import cTable from '@/components/v-toggleTerm'
  import tableData from '../../../public/data/table.json'

  export default Vue.extend({
    name: 'test',
    components: {
      cTable,
    },
    data() {
      return {
        tableData: {

        },
        policyData: {
          content: "watson",
          name: "推广费政策(点击看所有首续期推广费)",
          value: "",
          data: tableData.data
        },
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
  .test-container {
  }
</style>
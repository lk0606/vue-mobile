<template>
  <div class="profession-container">
    <bxs-button type="primary" @click="value=true">职业弹窗</bxs-button>
    <bxs-profession-list :columns="columns" v-model="value" ></bxs-profession-list>
  </div>
</template>

<script>
  export default {
    name: 'profession',
    components: {},
    data() {
      return {
        value: false,
        columns: [
          {
            des: '印刷',
            children: [{
              des: '文教',
              children: [{
                code: '01701',
                des: '体育用品制造经营管理者',
                val: 1,
              }]
            }]
          }
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
  }
</script>

<style lang="scss" scoped>
  .profession-container {
  }
</style>
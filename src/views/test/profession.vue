<template>
  <div class="profession-container">
    <bxs-button type="primary" @click="value=true">职业弹窗</bxs-button>
    <bxs-profession-list :columns="columns" v-model="value" ></bxs-profession-list>
    <button type="button" @click="popPicker">展示</button>
    <button type="button" @click="handleDate">打开</button>
    <button type="button" @click="closeDate">关闭</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Picker, DatetimePicker } from 'bxs-ui-vue'
  Vue.use(Picker);
  export default {
    name: 'profession',
    components: {},
    data() {
      return {
        minDate: new Date('1970/01/01'),
        maxDate: new Date('1970/01/02'),
        value: false,
        currentDate: '',
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
        ],
        citys: [
          {
            "key": "beneficiary_relation",
            "name": "配偶",
            "value": "2"
          },
          {
            "key": "beneficiary_relation",
            "name": "父母",
            "value": "11"
          },
          {
            "key": "beneficiary_relation",
            "name": "子女",
            "value": "12"
          }
      ],
        defaultValue:['beneficiary_relation']
      }
    },
    computed: {},
    watch: {},
    methods: {
      handleDate() {
        this.$datetime({
          value: new Date(),
          type: 'date',
          confirmButtonColor:'#508cee',
          minDate: this.minDate,
          maxDate: this.maxDate,
          confirm(data) {
            console.log(data, 'confirm')
          },
          change(data) {
            console.log(data, 'change')
          },
        })
      },
      closeDate() {
        this.$datetime.close()
      },
      popPicker(){
        this.$picker({
          title: 'picker标题',
          valueKey: 'name',
          defaultValue: this.defaultValue,
          value: this.defaultValue,
          className: 'test',
          pickerData: this.citys,
          callback(backInfo) {
            console.log(backInfo)
          },
        })
      }
    },
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
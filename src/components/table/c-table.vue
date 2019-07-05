<template>
<div class='c-table-container'>
  <div class="table-container">
<!--      <div class="title-wrap thin-border-bottom bx-hairline&#45;&#45;bottom">-->
<!--        <h1-->
<!--            v-if="title"-->
<!--            class="table-title">{{title}}</h1>-->
<!--        <bxs-icon name="close" color="#ccc" size="1.2rem" @click="hide"></bxs-icon>-->
<!--      </div>-->
      <table class="c-table">
        <thead
            class="c-table-thead"
        >
          <tr >
            <th
                v-for="(head, hIndex) in tableHeader"
                :key="head.prop"
            >{{head.label}}</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'c-table',
  components: {},
  data() {
    return {
      position: 'bottom',
      show: true,
    }
  },
  props: {
    title: {
      type: [String, Boolean],
      default: '表格标题'
    },
    tableHeader: {
      type: Array,
      default() {
        return [
          {
            prop: 'year',
            label: '年度',
            width: "100",
            minWidth: '',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
          {
            prop: 'age',
            label: '年龄',
            width: "100",
            minWidth: '',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
          {
            prop: 'dieEnsure',
            label: '身故保障',
            width: "",
            minWidth: '180',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
          {
            prop: 'totalAnnuity',
            label: '累计年金',
            width: "",
            minWidth: '180',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
          {
            prop: 'cashValue',
            label: '现金价值',
            width: "",
            minWidth: '180',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
          {
            prop: 'testX',
            label: '测试横向滚动',
            width: "",
            minWidth: '180',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
        ]
      }
    },
    tableBody: {
      type: Array,
      default() {
        return [
          {
            year: '1',
            age: '23',
            dieEnsure: '10000',
            totalAnnuity: '0',
            cashValue: '489946',
            testX: '13213',
          },
          {
            year: '1',
            age: '23',
            dieEnsure: '10000',
            totalAnnuity: '0',
            cashValue: '489946',
            testX: '13213',
          },
        ]
      }
    },
  },
  computed: {},
  watch: {},
  methods: {
    hide() {
      console.log(this.show, 'hide')
      // this.show = false
      this.$emit('input', false)
      // this.$refs.popup.close()
    },
    handleHistory() {
    }
  },
  created() {
  },
  mounted() {
    // window.addEventListener('popstate', ()=> {
    //   alert('popstate')
    // })
  }
})
</script>

<style lang="scss" scoped>
.c-table-container {
  width: 100%;
  height: 100%;
  background: #fff;
  .table-container {
    .title-wrap {
      display: flex;
      align-items: center;
      /*padding: .7rem .75rem;*/
      padding: 28px 30px;
      .table-title {
        flex: 1;
        font-weight: bold;
        /*font-size: .7rem;*/
        font-size: 28px;
        color: #333;
        letter-spacing: 0;
        text-align: center;
        /*line-height: .85rem;*/
        line-height: 34px;
      }
    }
    .c-table {
      /*padding: .75rem;*/
      padding: 30px;
      .c-table-thead {
        background: #e5e5e5;
      }
    }
  }
}
</style>
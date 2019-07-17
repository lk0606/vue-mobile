<template>
<div class='c-table-container'>
  <h1 style="margin-bottom: 30px;">原生滚动  头部固定：</h1>
  <div class="table-container" @scroll="preventDefault" @touchmove="preventDefault">

      <div class="table table-header">
        <table class="c-table bx-hairline--surround" cellpadding="0" cellspacing="0">
          <thead
              class="c-table-thead"
          >
          <tr >
            <th
                v-for="(head, hIndex) in tableHeader" :key="head.prop"
                class=""
                :class="[{
                    [`c-table-col-index_${hIndex}-${head.width}px`]: head.width,
                    [`cols`]: head.prop==='year',
                }]"
                :style="style(head)"
            >{{head.label}}</th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="table table-body">
        <table class="c-table bx-hairline--surround" cellpadding="0" cellspacing="0">
          <tbody class="c-table-tbody">
<!--          <colgroup>-->
<!--            <col v-for="(item, index) in tableHeader" :key="index" :width="item.width">-->
<!--          </colgroup>-->
          <tr
              v-for="(body, bIndex) in tableBody" :key="bIndex">
            <td
                v-for="(head, hIndex) in tableHeader" :key="head.prop"
                :class="[{
                    [`cols`]: head.prop==='year',
                }]"
                :style="style(head)"
            >{{ body[head.prop] }}</td>
          </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import BScroll from 'better-scroll'
import { createIScroller } from "@/utils/iscrollTable1";

export default Vue.extend({
  name: 'c-table',
  components: {},
  data() {
    return {
      position: 'bottom',
      show: false,
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
            width: "",
            minWidth: '100',
            maxWidth: '',
            align: 'center',
            fixed: '',
          },
          {
            prop: 'age',
            label: '年龄',
            width: "",
            minWidth: '100',
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
  computed: {
  },
  watch: {},
  methods: {
    preventDefault(e) {
      // console.log(e, 'e')
      // if(e.type==='scroll' || e.type==='touchmove') {
      //
      // }
      // let dom = document.querySelector('.table-container')
      // let event = 'scroll' ? 'scroll' : 'touchmove'
      // dom.addEventListener([event],(e)=> {
      //   document.preventDefault()
      // })
    },
    hide() {
    },
    pxToRem(num: [Number, String]) {
      let root = document.querySelector('html').style.fontSize
      root = parseInt(root) * 2
      return parseInt(num) / root + 'rem'
      console.log(root, 'root')
    },
    style(style: Object) {
      // console.log(style, 'style')
      return {
        // delete style.width
        'width': style.width ? `${this.pxToRem(style.width)}` : '',
        'min-width': style.minWidth ? `${this.pxToRem(style.minWidth)}` : ''
      }
    },
    initScroll() {
      let scroller = new BScroll('.table-container', {
        preventDefault: false,
        // scrollX: true,
        freeScroll: true,
        bounce: false,
      })
      scroller.on('scroll',()=> {
        console.log('better scroll is scroll...')
      })
    },
    handleScroll() {
      // console.log('handleScroll...')
    },
  },
  created() {
  },
  mounted() {
  }
})
</script>

<style lang="scss" scoped>
.c-table-container {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 30px;
  .table-container {

    position: relative;
    /*height: 200px;*/
    /*padding: .75rem;*/
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
      width: 100%;
      font-size: 22px;
      color: #333;
      text-align: center;
      line-height: 32px;
      /*overflow: auto;*/
      /*overflow: hidden;*/
      .c-table-thead {
        background: #e5e5e5;
      }
      .c-table-tbody {
        /*height: 100px;*/
      }
    }
  }
}
  .table-container {
    /*height: 200px;*/
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling:touch;

  }
  .table-header {
  }
  .table-body {
    width: 100%;
    height: 150px;
    overflow-y: auto;
  }
</style>
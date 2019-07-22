<template>
<div class='c-table-container'>
  <div class="table-container border-surround m1">
      <table class="c-table" cellpadding="0" cellspacing="0" border="0">
          <thead
              v-if="showHeader"
              class="c-table-thead"
          >
            <tr>
              <td
                  v-for="(head, hIndex) in tableHeader" :key="head.prop"
                  class="border-bottom border-right"
                  :class="[{
                      [`rows`]: fixedHeader,
                      [`cross`]: head.fixed,
                  }]"
                  :style="style(head, 'head')"
              >
                <div
                    :class="head.align ? `cell-align-${head.align}` : `center`"
                >
                  <span>{{head.label}}</span>
                  <bxs-icon
                      class="ml-6"
                      v-if="head.icon"
                      size=".75rem"
                      color="#999"
                      :name="head.icon"></bxs-icon>
                </div>
              </td>
            </tr>
          </thead>
          <tbody class="c-table-tbody">
            <tr
                v-for="(body, bIndex) in tableBody" :key="bIndex"
                :class="{
                }"
            >
              <td
                  class=" border-bottom border-right"
                  v-for="(head, hIndex) in tableHeader" :key="head.prop"
                  :class="[{
                      [`cols`]: head.fixed,
                      [`table-row-odd`]: !stripe && bIndex % 2 !==0,
                      [`table-row-even`]: !stripe && bIndex % 2 ===0
                  }]"
                  :style="{
                      ...style(head),
                      backgroundColor: stripe && bIndex % 2 !==0 ? stripeColor : ''
                  }"
              >
                <div
                    :class="head.align ? `cell-align-${head.align}` : `center`"
                >
                  <span>{{ body[head.prop] }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
  </div>
</div>
</template>

<script>
import { createIScroller } from "@/utils/iscroll-probe";
import { table } from '../../../public/data/table-data'

export default {
  name: 'c-table',
  components: {},
  data() {
    return {
    }
  },
  props: {
    rootSize: {
      type: Number,
      default: 40
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    fixedHeader: {
      type: Boolean,
      default: true
    },
    tableHeader: {
      type: Array,
      default() {
        return table.tableHeader
      }
    },
    tableBody: {
      type: Array,
      default() {
        return table.tableBody
      }
    },
    headCellStyle: {
      type: Object,
      default() {
        return {
          background: '#f2f2f2',
          color: '#333',
          fontWeight: 'bold',
        }
      }
    },
    stripe: {
      type: Boolean,
      default: true
    },
    stripeColor: {
      type: String,
      default: '#f8f8f8'
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    pxToRem(size) {
      if(!size) {
        return
      }
      if(typeof size === 'number') {
        return parseFloat(size) / this.rootSize + 'rem';
      } else if(typeof size === 'string') {
        // /(^[0-9]+\.?|^0+\.|^\.)[0-9]*px$/i
        // 包含px 不分 大小写
        if(/[px]$/i.test(size)){
          const unit = size.substr(-2)
          if(unit==='px'){
            return parseFloat(size) / this.rootSize + 'rem';
          } else {
            return size;
          }
        // 不包含px
        } else {
          return parseFloat(size) / this.rootSize + 'rem';
        }

      } else {
        throw Error('Function pxToRem(size) argument should be supposed to number or string, but not')
      }
    },
    style(style, head) {
      let headCellStyle = head ? this.headCellStyle : {}
      return {
        'width': style.width ? `${this.pxToRem(style.width)}` : '',
        'min-width': style.minWidth ? `${this.pxToRem(style.minWidth)}` : '',
       ...headCellStyle
      }
    },
    initTable() {
        createIScroller('.table-container')
    },
  },
  created() {
  },
  mounted() {
    this.initTable()
  }
}
</script>
<style lang="scss" scoped>
  .c-table-container {
    /*overflow: hidden;*/
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0.75rem;
    .table-container {
      touch-action: pan-y;
      -webkit-overflow-scrolling:touch;
      width: 10rem;
      height: 6rem;
      overflow: hidden;
      position: relative;
      table {
        tr {
          height: 1.5rem;
          td:last-of-type {
            &::before {
              border-right-width: 0;
              display: none;
            }
          }
        }
        tbody {
          tr:last-of-type {
            td {
              &::after {
                border-bottom-width: 0;
                display: none;
              }
            }
          }
        }
      }
      .c-table {
        width: 100%;
        font-size: 0.55rem;
        color: #333;
        text-align: center;
        line-height: 0.8rem;
        .c-table-thead {
        }
        .c-table-tbody {
          color: #666;
        }
      }
    }
  }
  .rows {
    background: #fff;
    position: relative;
    z-index: 3;
  }
  .cols {
    background: #fff;
    position: relative;
    z-index: 4;
  }
  .cross {
    position: relative;
    z-index: 5;
  }
  /*.m1 {*/
  /*  margin: 0.025rem;*/
  /*}*/
  .m1 {
    margin: 1PX;
  }
  .p1 {
    padding: 1PX;
  }
  .ml-6 {
    margin-left: 0.15rem;
  }
  .table-row-stripe {
    background: #f8f8f8;
  }

  // 滚动条样式 custom
  .iScrollHorizontalScrollbar{
    z-index: 3;
    height: 0.2rem;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    left: 0.05rem;
    right: 0.175rem;
    bottom: 0.175rem;
    .iScrollIndicator{
      box-sizing: border-box;
      position: absolute;
      background: #ccc;
      border-radius: 0.1rem;
      height: 0.2rem;
    }
  }

  .iScrollVerticalScrollbar{
    z-index: 3;
    width: 0.2rem;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    bottom: 0.175rem;
    top: 0.05rem;
    right: 0.175rem;
    .iScrollIndicator{
      position: absolute;
      width: 0.2rem;
      //height: 0.3rem;
      border-radius: 0.1rem;
      box-sizing: border-box;
      background:  #ccc;
      display: block;
    }
  }
  .iScrollIndicator {
    display: none;
  }
  .cell-align-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cell-align-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .cell-align-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>

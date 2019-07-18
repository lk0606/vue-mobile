<template>
<div class='c-table-container'>
  <h1 style="margin-bottom: 30px;">iScroll translate   一切皆可固定：</h1>
  <div class="table-container bx-hairline--surround m1">
      <table class="c-table" cellpadding="0" cellspacing="0" border="0">
          <thead
              v-if="showHeader"
              class="c-table-thead"
          >
            <tr>
              <td
                  v-for="(head, hIndex) in tableHeader" :key="head.prop"
                  class="rows bx-hairline--bottom bx-hairline--right"
                  :class="[{
                      [`c-table-col-index_${hIndex}-${head.width}px`]: head.width,
                      [`cross`]: ['year', 'age'].includes(head.prop),
                  }]"
                  :style="{...style(head), ...headCellStyle}"
              >{{head.label}}</td>
            </tr>
          </thead>
          <tbody class="c-table-tbody">
            <tr
                v-for="(body, bIndex) in tableBody" :key="bIndex">
              <td
                  class="bx-hairline--bottom bx-hairline--right"
                  v-for="(head, hIndex) in tableHeader" :key="head.prop"
                  :class="[{
                      [`cols`]: ['year', 'age'].includes(head.prop),
                      [`table-row-stripe`]: stripe && bIndex % 2 !==0
                  }]"
                  :style="style(head)"
              >{{ body[head.prop] }}</td>
            </tr>
          </tbody>
        </table>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createIScroller } from "@/utils/iscrollTable1";
import { table } from '../../../public/data/t'

export default Vue.extend({
  name: 'c-table',
  components: {},
  data() {
    return {
      position: 'bottom',
      show: false,
      scroll: null,
    }
  },
  props: {
    title: {
      type: [String, Boolean],
      default: '表格标题'
    },
    showHeader: {
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
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    pxToRem(num: [Number, String]) {
      let root = document.querySelector('html').style.fontSize
      root = parseInt(root) * 2
      return parseInt(num) / root + 'rem'
    },
    style(style: Object) {
      // console.log(style, 'style')
      return {
        'width': style.width ? `${this.pxToRem(style.width)}` : '',
        'min-width': style.minWidth ? `${this.pxToRem(style.minWidth)}` : ''
      }
    },
    origin() {
        createIScroller('.table-container')
    },
    preventDefault() {
      let targetDom = document.querySelector('.table-container')
      targetDom.addEventListener('scroll', ()=> {

      },{ passive: false })
      targetDom.addEventListener('touchmove', ()=> {

      },{ passive: false })
    },
  },
  created() {
  },
  mounted() {
    this.origin()
    this.preventDefault()
  }
})
</script>

<style lang="scss" scoped>
.c-table-container {
  /*overflow: hidden;*/
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 30px;
  .table-container {
    touch-action: pan-y;
    -webkit-overflow-scrolling:touch;
    width: 8rem;
    height: 6rem;
    overflow: hidden;
    position: relative;
    table {
      tr {
        height: 60px;
        td:last-of-type {
          border-right: 0;
        }
      }
      tr:last-of-type {
        td {
          border-bottom: 0;
        }
      }
    }
    .c-table {
      width: 100%;
      font-size: 22px;
      color: #333;
      text-align: center;
      line-height: 32px;
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
.m1 {
  margin: 1px;
}
.table-row-stripe {
  background: #f8f8f8;
}
</style>
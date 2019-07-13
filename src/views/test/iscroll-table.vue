<template>
<div class='c-table-container'>
  <h1 style="margin-bottom: 30px;">iScroll translate   一切皆可固定：</h1>
  <div class="table-container" >
      <table class="c-table bx-hairline--surround" cellpadding="0" cellspacing="0">
          <thead
              class="c-table-thead"
          >
            <tr >
              <td
                  v-for="(head, hIndex) in tableHeader" :key="head.prop"
                  class="rows"
                  :class="[{
                      [`c-table-col-index_${hIndex}-${head.width}px`]: head.width,
                      [`cross`]: ['year', 'age'].includes(head.prop),
                  }]"
                  :style="style(head)"
              >{{head.label}}</td>
            </tr>
          </thead>
          <tbody class="c-table-tbody">
            <tr
                v-for="(body, bIndex) in tableBody" :key="bIndex">
              <td
                  v-for="(head, hIndex) in tableHeader" :key="head.prop"
                  :class="[{
                      [`cols`]: ['year', 'age'].includes(head.prop)
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
import BScroll from 'better-scroll'
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
    // initScroll() {
    //   let scroller = new BScroll('.table-container', {
    //     preventDefault: false,
    //     // scrollX: true,
    //     freeScroll: true,
    //     bounce: false,
    //   })
    //   scroller.on('scroll',()=> {
    //     console.log('better scroll is scroll...')
    //   })
    // },
    t() {
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
    this.t()
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
    width: 8rem;
    height: 6rem;
    overflow: hidden;
    position: relative;
    .title-wrap {
      display: flex;
      align-items: center;
      padding: 28px 30px;
    }
    .c-table {
      width: 100%;
      font-size: 22px;
      color: #333;
      text-align: center;
      line-height: 32px;
      .c-table-thead {
        background: #e5e5e5;
        /*overflow: hidden;*/
      }
      .c-table-tbody {
        /*overflow: hidden;*/
      }
    }
  }
}
  .table-container {
    width: 8rem;
    height: 6rem;
    overflow: hidden;
    -webkit-overflow-scrolling:touch;

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
</style>
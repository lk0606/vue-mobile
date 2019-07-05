<template>
<div class='c-table-container'>

  <bxs-button
      @click="show=true"
  >点击弹窗</bxs-button>
  <bxs-popup v-model="show" :position="position" ref="popup">

    <div class="table-container">
      <div class="title-wrap thin-border-bottom bx-hairline--bottom">
        <h1
            v-if="title"
            class="table-title">{{title}}</h1>
        <bxs-icon name="close" color="#ccc" size="1.2rem" @click="hide"></bxs-icon>
      </div>
      <table class="c-table">
        <thead
            class="c-table-thead"
        ></thead>
        <tbody></tbody>
      </table>
    </div>

  </bxs-popup>
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
      url: 'http://d1uqemdciwkits.cloudfront.net/ContentManage/video/988371d6-af85-43f3-aff4-1166b8b67e14.mp4',
    }
  },
  props: {
    title: {
      type: String,
      default: '表格标题'
    },
    tableHeader: {
      type: Array,
      default() {
        return [
          {
            prop: 'year',
            label: '年度'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    hide() {
      console.log(this.show, 'hide')
      // this.show = false
      this.$emit('input', false)
      // this.$refs.popup.close()
    }
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
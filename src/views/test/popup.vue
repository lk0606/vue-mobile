<template>
  <div class='popup-container'>
    <bxs-button @click="show=true">打开</bxs-button>
    <bxs-popup v-model="show" position="bottom">
      <bxs-button @click="show=false">关闭</bxs-button>
    </bxs-popup>
    <mt-range
        class="mt30"
        v-model="rangeValue"
        :min="1"
        :max="100"
        :step="1"
        :bar-height="5"
    >
      <div slot="start"><bxs-icon name="reduce-plain"></bxs-icon></div>
      <div slot="end"><bxs-icon name="add-plain"></bxs-icon></div>
    </mt-range>

    <h1>vant:</h1>
    <van-slider v-model="value" @change="onChange" ></van-slider>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'popup',
    components: {},
    data() {
      return {
        show: false,
        rangeValue: 5,
        value: 50,
      }
    },
    computed: {},
    watch: {},
    methods: {
      onChange(value) {
        this.$toast('当前值：' + value);
      }
    },
    created() {
    },
    mounted() {
    }
  })
</script>

<style lang="scss" scoped>
  .popup-container {
  }
</style>
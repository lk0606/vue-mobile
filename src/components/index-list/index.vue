<template>
    <div class="index-container">
        <van-index-bar>
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
        </van-index-bar>
        <bxs-tab
            class="bxs-tab-reset"
            @change="tabChange">
            <bxs-tab-item
                class="bxs-tab-item-reset"
                v-for="(item, index) in policyData" :key="index"
            >{{item.name}}</bxs-tab-item>
        </bxs-tab>
        <div
            class="scroll-wrap mt30"
            v-for="(item, index) in policyData" :key="index">
            <h4>{{item.name}}</h4>
            <ul v-for="(subItem, subIndex) in item.insurePolicyConservationWidgetList[0]" :key="subIndex">
                <li><label class="mr40">{{subItem.label}}:</label> {{subItem.value}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {
        getScrollTop,
        getElementTop,
        getRootScrollTop,
        setRootScrollTop,
        getScrollEventTarget
    } from './scroll.js';
    import { t } from "./data";
    import { Tab, TabItem } from 'bxs-ui-vue'

    export default {
        name: 'index',
        components: {
            [Tab.name]: Tab,
            [TabItem.name]: TabItem,
        },
        data() {
            return {
                policyData: t.data.policyData,
                // tabIndex: 0,
                // changeDomList: document.querySelectorAll('.scroll-wrap'),
                // activeOffsetTop: document.querySelectorAll('.scroll-wrap')[0].offsetTop,
            }
        },
        computed: {
        },
        watch: {},
        methods: {
            tabChange(index) {
                const changeDomList = document.querySelectorAll('.scroll-wrap')
                console.log(document.querySelectorAll('.scroll-wrap')[index].offsetTop, 'document.querySelectorAll(\'.scroll-wrap\')[index].offsetTop')
                // this.tabIndex = index
                if(changeDomList && changeDomList[index]) {
                    window.scrollTo(0, document.querySelectorAll('.scroll-wrap')[index].offsetTop - document.querySelectorAll('.scroll-wrap')[0].offsetTop)
                    // this.changeDomList[index].offsetTop = this.activeOffsetTop
                }
            },
            onScroll() {

            },
        },
        created() {
        },
        mounted() {
            // window.addEventListener('touchmove', this.onScroll() )
            // console.log(this)
            let ele = document.querySelectorAll('.scroll-wrap')
            console.log(getElementTop(ele[0]), getElementTop(ele[1]))
        }
    }
</script>

<style lang="scss" scoped>
    .index-container {
        .bxs-tab-reset {
            /*position: fixed;*/
            /*left: 0;*/
            /*top: 0;*/
            .bxs-tab-item-reset {
            }
        }
        font-size: 16PX;
        background: #fff;
        .scroll-wrap {
            border: 1px solid red;
        }
    }
</style>

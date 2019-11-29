<template>
    <div
        v-if="policyData"
        class="index-container">
        <bxs-form
            ref="form" :model="form" :rules="rules"
        >
            <bxs-form-item prop="name" label="姓名">
                <bxs-input type="text" v-model="form.name" placeholder="请填写姓名" />
            </bxs-form-item>
        </bxs-form>
        <bxs-steps
            class="bxs-steps-reset"
            :active="0">
            <bxs-step
                class="bxs-step-reset">信息变更</bxs-step>
            <bxs-step
                class="bxs-step-reset">上传资料</bxs-step>
            <bxs-step
                class="bxs-step-reset">提交审核</bxs-step>
        </bxs-steps>

        <bxs-tab
            :class="{'bxs-tab-fixed': fixTab}"
            class="bxs-tab-reset"
            ref="tab">
            <bxs-tab-item
                @click.native="scrollTarget(index)"
                class="bxs-tab-item-reset"
                v-for="(item, index) in policyData" :key="index"
            >{{item.name}}</bxs-tab-item>
        </bxs-tab>
        <ul class="change-list-wrap">
            <li
                v-if="tabHeight>0"
                :style="{height: tabHeight + 'px'}"></li>
            <li
                class="widget-list-wrap mt30"
                v-for="(item, index) in policyData" :key="index">
                <h4>{{item.name}}</h4>
                <ul v-for="(subItem, subIndex) in item.insurePolicyConservationWidgetList[0]" :key="subIndex">
                    <li><label class="mr40">{{subItem.label}}:</label> {{subItem.value}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    function debounce(fn, wait) {
        var timer = null;
        return function () {
            var context = this
            var args = arguments
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, wait)
        }
    }
    import {
        getScrollTop,
        getElementTop,
        getRootScrollTop,
        setRootScrollTop,
        getScrollEventTarget
    } from './scroll.js';
    import { t } from "./data";
    import { Tab, TabItem, Form, FormItem, Input } from 'bxs-ui-vue'

    export default {
        name: 'index',
        components: {
            [Input.name]: Input,
            [Tab.name]: Tab,
            [TabItem.name]: TabItem,
            [Form.name]: Form,
            [FormItem.name]: FormItem,
        },
        data() {
            return {
                form: {
                    name: '',
                },
                rules: {
                    name: [
                        {required: true, message: '请填写姓名'}
                    ]
                },
                policyData: t.data.policyData,
                fixTab: false,
                tabHeight: 0,
                tabIndex: 0,
                // changeDomList: document.querySelectorAll('.widget-list-wrap'),
                // activeOffsetTop: document.querySelectorAll('.widget-list-wrap')[0].offsetTop,
            }
        },
        computed: {
        },
        watch: {},
        methods: {
            scrollTarget(index) {
                // this.tabIndex = index
                const changeDomList = document.querySelectorAll('.widget-list-wrap')
                const tab = document.querySelector('.bxs-tab-reset')
                // const { position } = window.getComputedStyle(tab)
                // console.log(position, 'position')
                if(changeDomList && changeDomList[index]) {
                    // const curOffsetTop = getElementTop(document.querySelectorAll('.widget-list-wrap')[index])
                    const curOffsetTop = document.querySelectorAll('.widget-list-wrap')[index].offsetTop
                    // console.log(curOffsetTop, 'curOffsetTop')
                    window.scrollTo( 0, curOffsetTop - tab.offsetHeight)
                }
            },
            checkTab() {
                const tab = document.querySelector('.bxs-tab-reset')
                const changeDomList = document.querySelectorAll('.widget-list-wrap')
                const scrollY = window.scrollY

                if(changeDomList && this.$refs.tab) {
                    for(let i in changeDomList) {
                        const index = parseInt(i)
                        if (changeDomList[index]) {
                            if (scrollY >= (changeDomList[index].offsetTop - tab.offsetHeight)) {
                                if (this.$refs.tab) {
                                    this.$refs.tab.$emit('change-item', index)
                                }
                                changeDomList[index].style.borderColor = 'green'
                                // break;
                            } else {
                                changeDomList[index].style.borderColor = 'red'
                            }
                        }
                    }
                }
            },
            onScroll() {
                const tab = document.querySelector('.bxs-tab-reset')
                const steps = document.querySelector('.bxs-steps-reset')
                const rootScrollTop = getRootScrollTop()
                if(rootScrollTop > tab.offsetHeight + steps.offsetHeight) {
                    this.fixTab = true
                    this.tabHeight = tab.offsetHeight
                    this.checkTab()
                }
                else {
                    this.fixTab = false
                    this.tabHeight = 0
                }
            },
        },
        created() {
        },
        mounted() {
            // this.onScroll()
            window.addEventListener('scroll', this.onScroll)
            // window.addEventListener('touchmove', debounce(this.onScroll, 400))
            // console.log(this)
            let ele = document.querySelectorAll('.widget-list-wrap')
            // console.log(getElementTop(ele[0]), getElementTop(ele[1]))
        }
    }
</script>

<style lang="scss" scoped>
    .index-container {
        .bxs-steps-reset {
            background: #fff;
            padding: .6rem 0;
            margin-bottom: .18rem;
            .bxs-step-reset {
                display: flex;
                justify-content: center;
            }
        }
        .bxs-tab-fixed {
            position: fixed;
            left: 0;
            top: 0;
        }
        .bxs-tab-reset {
            .bxs-tab-item-reset {
            }
        }
        font-size: 16PX;
        background: #fff;
        .change-list-wrap {
            .widget-list-wrap {
                border: 1px solid red;
            }
        }
    }
</style>

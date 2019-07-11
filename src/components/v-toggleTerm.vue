<template>
    <!-- 单个obj时的渲染 -->
    <div class="v-toggle-term" v-if="itemData && type === 'normal'">
        <div class="normal-select-block" :class="{bhb: !isToggle}" @click="toggle(itemData)">
            <i v-show="icon" :class="itemData.icon" class="iconfont normal-icon"></i>
            <span class="type font-15">{{itemData.name}}</span>
            <span class="value font-14" :style="{'color': rightTextColor}">{{itemData.value}}</span>
            <i style="width: 16px;height: 16px;" v-if="!isToggle && !itemData.content"></i>
            <i class="iconfont icon-arrows_down color-CCC font-18" v-if="!isToggle && itemData.content"></i>
            <i class="iconfont icon-arrows_up color-CCC font-18" v-show="isToggle"></i>
        </div>
        <div class="toggleContent" v-if="isToggle && !icon" v-html="itemData.content">
        </div>
        <div class="toggleContent show-list" v-if="isToggle && icon && itemData.content && itemData.content.length > 0">
          <div class="list" v-for="item in itemData.content">
            <span class="type font-14 fs13">{{item.name}}<em class="t-icon" v-if="item.riskType == 1&&itemData.content.length>1">主险</em></span>
            <span class="value font-14 fs13">{{item.value}}</span>
          </div>
        </div>
    </div>
    <!-- 标题使用 -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'title'">
        <div class="normal-select-block normal-select-block-title" :class="{bhb: !isToggle}" @click="activity">
            <span class="k">{{itemData.text}}</span>
            <span v-if="!itemData.number" class="type" :class="{'fs': itemData.fs}">{{itemData.name}}</span>
            <span v-if="itemData.number" class="type" :class="{'fs': itemData.fs}">已有<span :style="{'color': rightTextColor}">{{itemData.number}}</span>多拿推广费</span>
            <i class="iconfont icon-common_problem qu" :style="{'color': rightTextColor}" v-if="itemData.isShowRightIconQuestion"></i>
            <span class="value font-14" :class="{'font-13': itemData.fs}" :style="{'color': rightTextColor}">{{itemData.value}}</span>
            <i class="iconfont icon-arrows_right color-CCC" v-show="itemData.isShowRightIcon"></i>
        </div>
    </div>
    <!--加油团：icon + name + contetn + time-->
    <div class="v-toggle-term" v-else-if="itemData && type === 'group'">
        <div class="normal-select-block normal-select-block-title">
            <!-- <img v-show="icon" :src="itemData.icon" class="img" alt="BXS-ICON"> -->
            <img :src="itemData.icon ? itemData.icon : '//res.wyins.net/autoUpload/common/2x_324fe3db668b562.png'" class="img" alt="BXS-ICON">
            <span class="type flex-one-half font-13 c3 cut">{{itemData.name}}</span>
            <span class="type flex-one-half font-13" :style="{'color': rightTextColor}">{{itemData.jiayou ? '加油' : ''}}{{itemData.value}}{{itemData.isApp ? '' :'元'}}</span>
            <span class="type font-13 c9 tr">{{itemData.time}}</span>
        </div>
    </div>
    <!-- 活动 -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'activity'">
        <div class="normal-select-block" :class="{bhb: !isToggle}" @click="activity">
            <span class="label">{{itemData.label}}</span>
            <span class="k">{{itemData.text}}</span>
            <span class="type font-14">{{itemData.name}}</span>
            <span class="value font-14" :style="{'color': rightTextColor}">{{itemData.value}}</span>
            <i class="iconfont icon-arrows_right color-CCC"></i>
        </div>
    </div>
    <div class="v-toggle-term" v-else-if="itemData && type === 'checkDetails'">
        <div class="total-premium">
          <span style="font-size:14px;color:#333;">总保费</span>
          <span style="font-size:14px;color:#ff5000;">{{itemData.total_premium}}元</span>
        </div>
        <div class="risk-premium" v-for="item in itemData.risk_premiums">
          <span class="name">{{item.riskName}}</span>
          <span>{{item.premium}}元</span>
        </div> 
    </div>
    <!-- FYC -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'tip'">
        <div class="normal-select-block" :class="{bhb: !isToggle}">
            <span class="label tip padlf3">{{itemData.label}}</span>
            <span class="k">{{itemData.text}}</span>
            <span class="type font-14">{{itemData.name}}</span>
            <span class="value font-14" :style="{'color': rightTextColor}">{{itemData.value}}</span>
            <!-- <i class="iconfont icon-arrows_right color-CCC"></i> -->
        </div>
    </div>
    <!-- pdf list时渲染 -->
    <div class="v-toggle-term" v-else-if="itemDataArray && type === 'jump'">
      <template v-for="item in itemDataArray">
        <div class="select-block" style="padding: .75rem;" v-if="item.name" @click="jump(item)">
          <span class="type font-14">{{item.name}}</span>
          <i class="iconfont icon-arrows_right color-CCC"></i>
        </div>
      </template>
    </div>
    <!-- pdf 单个obj时的渲染 -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'jumpFormObj'">
      <div class="select-block" style="padding: .75rem;" v-if="itemData.name" @click="jump(itemData)">
        <span class="type font-14">{{itemData.name}}</span>
        <i class="iconfont icon-arrows_right color-CCC"></i>
      </div>
    </div>
    <!-- 问题 -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'question'">
        <div class="select-block" @click="toggle(itemData)">
            <span class="type font-14">{{itemData.question}}</span>
            <i class="iconfont icon-arrows_down color-CCC font-18" v-show="!isToggle"></i>
            <i class="iconfont icon-arrows_up color-CCC font-18" v-show="isToggle"></i>
        </div>
        <div class="toggleContent" v-if="isToggle" >
            <p>{{itemData.answer}}</p>
        </div>
    </div>
    <!-- 表格 -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'table'">
        <div class="normal-select-block" :class="{bhb: !isToggle}" @click="toggle(itemData)"  data-stat-id='tgfzc'>
            <i v-show="icon" class="iconfont normal-icon icon-handbook"></i>
            <span class="type font-14">{{itemData.name}}</span>
            <span class="value font-14">{{itemData.value}}</span>
            <i class="iconfont icon-arrows_down color-CCC font-18" v-if="!isToggle && itemData.content"></i>
            <i class="iconfont icon-arrows_up color-CCC font-18" v-show="isToggle"></i>
        </div>
        <div class="toggleContent toggleTable" v-if="isToggle" id="toggle-tables">
          <template v-if="itemData.data && itemData.data.length > 0">
            <div class="table-leader-title"><p class="fs13">选择不同保障期限查看不同续期推广费</p></div>
            <div class="meal-table2" ref="tableBox" >
              <table style="white-space: nowrap;" ref="rollingTable" id="table" cellpadding="0" cellspacing="0">
                <tr class="tr-first">
                  <td class="rows cross" v-if="itemData.data.length>1"><span class="top" :style="[{width:4 +'rem'}]">险种</span></td>
                  <td :class="['rows','cross',{'no-mtitle':itemData.data.length<=1}]"><span class="top top2">交费年期/推广费</span></td>
                  <td v-for='(item,index) in longBoList' :class="['rows',{'fcols':index==0}]"><span class="top">{{item.supportedYear ? `第${item.supportedYear}年` : '推广费'}}</span></td>
                </tr>
                <template v-for='(item,findex) in itemData.data'>
                  <tr v-for='(item2,index) in item.productBonusPolicyBoList'>
                    <td :class="['cols',{'cols-tb':index == 0}]" v-if="index == 0&&itemData.data.length>1" :rowspan="item.productBonusPolicyBoList.length" :style="[{height:1.5*item.productBonusPolicyBoList.length+'rem'},{width:4 +'rem'}]"><span :class="['desc',{'first':findex == 0}]"><span class="intext">{{item.riskNameDesc}}</span></span></td>
                    <td :class="['cols',{'cols-tb':index == 0},{'no-mtitle':itemData.data.length<=1}]"><span>{{item2.payTermDesc}}</span></td>
                    <template v-if="item2.productBonusBoList.length < longBoList.length">
                      <td v-for='(it,itd) in item2.productBonusBoList' :class="[{'tleft':itd==0},{'cols-tb':index == 0}]">
                        <template v-if="it.bonusRate&&it.bonus_desc"> {{it.bonus_desc}} {{it.missionRate&&it.missionDesc?('+'+it.missionDesc):""}} </template>
                        <template v-else>
                            <template v-if="it.bonus_desc&&!it.missionRate"> {{it.bonus_desc}} </template>
                            <template v-else>
                                {{it.missionRate&&it.missionDesc?(it.missionDesc):""}}
                            </template>
                        </template>
                      </td>
                      <td v-for='(it,itd) in longBoList.slice(item2.productBonusBoList.length ,longBoList.length)' :class="[{'cols-tb':index == 0}]">/</td>
                    </template>
                    <template v-else>
                      <td v-for='(it,itd) in item2.productBonusBoList' :class="[{'tleft':itd==0},{'cols-tb':index == 0}]">
                        <template v-if="it.bonusRate&&it.bonus_desc"> {{it.bonus_desc}} {{it.missionRate&&it.missionDesc?('+'+it.missionDesc):""}} </template>
                        <template v-else>
                            <template v-if="it.bonus_desc&&!it.missionRate"> {{it.bonus_desc}} </template>
                            <template v-else>
                                {{it.missionRate&&it.missionDesc?(it.missionDesc):""}}
                            </template>
                        </template>
                      </td>
                    </template>
                  </tr>
                </template>
              </table>
            </div>
          </template>
          <template v-else>
            <p>暂无推广费信息</p>
          </template>
        </div>
    </div>

    <!-- 奖励券 -->
    <div class="v-toggle-term" v-else-if="itemData && type === 'reward'">
      <div class="normal-select-block reward" :class="{bhb: !isToggle}" @click="activity">
        <span class="label">{{itemData.label}}</span>
        <span class="text" v-for="(val, key) in itemData.text" :key="key">{{ val.full.msg }}<span class="num" v-if="val.full.val">{{ val.full.val }}</span>{{ val.reward.msg }}<span class="num" v-if="val.full.val">{{ val.reward.val }}</span><span v-if="itemData.text.length>1 && key===0">，</span>
          </span>
        <span class="type font-14">{{itemData.name}}</span>
        <span class="value font-14" :style="{'color': rightTextColor}">{{itemData.value}}</span>
        <i class="iconfont icon-arrows_right" v-if="icon1" :style="icon1"></i>
      </div>
    </div>
</template>
<script>
    import { createIScroller, refreshScroller } from "../utils/iscrollTable"

    export default{
        name:'toggleTerm',
        data(){
            return{
                isToggle:this.isShowToggle,
                scroll: {
                  scroller: null
                },
                prem:''
            }
        },
        props: {
          itemData: {
            type: Object,
          },
          type: {
            type: String,
            default: 'normal'
          },
          itemDataArray: {
            type: Array
          },
          icon: {
            type: Boolean,
            default: false
          },
          isShowToggle: {
            type: Boolean,
            default: false
          },
          icon1: {
            type: [Boolean, Object],
            default () {
              return {
                fontSize: '0.9rem',
                color: '#ccc'
              }
            }
          },
          rightTextColor: {
            type: String,
            default: ''
          },
          longBoList: {
            type: Array,
            default () {
              return []
            }
          },
        },
        components:{

        },
        mounted() {
          if (window.innerWidth <= 320) {
              this.prem = 20
          } else {
              this.prem =(document.body.offsetWidth * 40 / 750) 
          }
        },
        watch:{
           
        },
        methods:{
            toggle (itemData){
                if(itemData.content || itemData.answer){
                    this.isToggle = !this.isToggle;
                    this.$emit('barClick')
                    if(this.isToggle&&this.type == 'table'){
                      //推广费表格控制
                      setTimeout(function(){
                        this.scroll.scroller = createIScroller(".meal-table2");
                      },100)
                    }
                }
            },
            jump(item) {
              if (item.fileAddress) {
                this.jumpPdf(item.fileAddress, item.name)
              }
            },
            jumpPdf(url, label) {
              if (window.appBridge && window.appBridge.checkAppFeature('HANDLE_FILE')) {
                appBridge.handleFile({
                  url: url.indexOf('http') > -1 ? url : `${window.location.protocol}${url}`, // 需要下载的文件URL
                  title: label, // 另存为的文件名
                  action: 'sharePdf' // 下载后执行动作，3.4仅有一个可选值为分享
                })
              } else {
                location.href = url.indexOf('http') > -1 ? url : `${window.location.protocol}${url}`
              }
            },
            activity() {
              this.$emit('clickHandler')
            },
        }
    }
</script>
<style lang="scss" scoped>
    .normal-icon {
      font-size: 18px;
      margin-right: 15px;
      color: #666;
    }
    .color-CCC {
      color: #CCC;
    }
    .c9 {
      color: #999;
    }
    .fs13 {
      font-size: 13px;
    }
    .fs18 {
      font-size: 18px;
    }
    .v-toggle-term {
        background-color: #FFF;
    }
    .toggleContent{
        position: relative;
        padding: 0 .75rem .75rem .75rem;
        font-size: .65rem;
        color: #666;
        text-align: justify;
        p {
            font-family: 'PingFangSC-Regular';
            font-size: .7rem;
            line-height: 1.4;
            color: #666;
        }
        &:after {
          content: "";
          position: absolute;
          top: auto;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #e5e5e5;
          -webkit-transform-origin: 0 100%;
          -ms-transform-origin: 0 100%;
          transform-origin: 0 100%;
          -webkit-transform: scaleY(0.5);
          -ms-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        *{
            font-size: .7rem;
        }
        .t-icon{
          font-size: 0.5rem;
          color: #FF5000;
          border: 1px solid #FF5000;
          border-radius: 1px;
          padding: 1px 3px;
          margin-left: 0.5rem;
          line-height: 100%;
        }
    }
    .show-list {
      div.list {
        display: flex;
        margin-bottom: .4rem;
        span:nth-child(1) {
          flex: 1;
          margin-left: 1.7rem;
        }
        span:nth-child(2) {
          // flex: 1;
          text-align: right;
          margin-right: 1rem;
          margin-left: 1rem;
        }
      }
    }
    .normal-select-block{
        /*box-sizing: border-box;*/
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 2.5rem;
        padding: .75rem .75rem;
        &.bhb {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: auto;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            margin-left: 15px;
            background-color: #e5e5e5;
            -webkit-transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            transform-origin: 0 100%;
            -webkit-transform: scaleY(0.5);
            -ms-transform: scaleY(0.5);
            transform: scaleY(0.5);
          }
        }
        >i,span{
            font-size: .75rem;
            line-height: 1rem;
        }
        .label {
          display: inline-block;
          margin-right: 9px;
          font-size: 12px; //.5rem;
          color: #FF5000;
          border: 1px solid #FF5000;
          border-radius: 2px;
          /*width: 30px;*/
          text-align: center;
          padding: 1px 2px;
          line-height: normal;
          &.tip{
            min-width: 30px;
            width: auto;
          }
          &.padlf3{
            padding: 0 3px;
          }
        }
        .type{
            -webkit-box-flex: 1;
            flex: 1;
            font-size: .75rem;
        }
        .cut {
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .fs {
          font-size: 15px;
          font-weight: 800;
        }
        .value{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .65rem;
        }
        .font-13 {
          font-size: .65rem;
        }
        .flex-one-half {
          flex: 1.5;
        }
        >i{
            margin-left: 4px;
        }
        >i.qu {
          margin-right: 6px;
          font-size: 18px;
        }
        >i.qu.font-13 {
          font-size: .65rem;
        }
        .tr {
          text-align: right;
        }
    }
    .reward {
      font-size: 0;
      .text {
        font-size: .75rem;
        .num {
          color: #FF5000;
        }
      }
    }
    .select-block{
        /*box-sizing: border-box;*/
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 2.5rem;
        padding: .75rem .75rem;
        &:after {
            content: "";
            position: absolute;
            top: auto;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            margin-left: 15px;
            background-color: #e5e5e5;
            -webkit-transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            transform-origin: 0 100%;
            -webkit-transform: scaleY(0.5);
            -ms-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
        >i,span{
            line-height: 1rem;
        }
        .type{
            -webkit-box-flex: 1;
            flex: 1;
            font-size: .75rem;
        }
        .value{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .75rem;
        }
        >i{
            margin-left: 4px;
        }
    }
    //表格相关
    .show-content-table {
      // border-top: 1px #E5E5E5 solid;
      // padding: 1rem;
      .table-leader-title {
        color: #666;
        text-align: left;
        padding: 0 0 .5rem 0;
      }
    }
    .show-content-table table {
      color: #666;
      font-size: .8rem;
      width: 100%;
      border-collapse: collapse;
      border: solid 1px #E5E5E5;
    }
    .show-content-table table td {
      border: solid 1px #e5e5e5;
      padding: .4rem .3rem;
      text-align: center;
      font-size: .55rem;
    }
    .show-content-table table tr:nth-child(odd) {
      background-color: #F8F8F8;
    }
    .toggleTable{
      -webkit-overflow-scrolling: touch; 
      position: relative;
      background: #fff;
      .table-leader-title {
        color: #666;
        text-align: left;
        padding: 0 0 .5rem 0;
      }
    }
    // .show-content-table.meal-table{
    //   height: 100%;
    //   font-size: 0.28rem;
    //   color: #86939a;
    //   background-color: #fff;
    //   width: 100%;
    //   -webkit-overflow-scrolling: touch;
    //   position: relative;
    //   top: 0;
    //   overflow: hidden;
    //   table {
    //     border:0;
    //     border-bottom: solid 1px #E5E5E5;
    //     border-right: solid 1px #E5E5E5;
    //   }
    //   tr{
    //     position: relative;
    //     background: #fff;
    //     &.tr-first{
    //       background-color: #F8F8F8;
    //     }
    //     td{
    //       height:1.5rem;
    //       overflow: hidden;
    //       padding: 0 .3rem;
    //       &.fcols{
    //         border-left:0;
    //       }
    //     }
    //     // &:nth-child(odd) {
    //     //   background-color: #F8F8F8;
    //     //   .cols{
    //     //     background: #F8F8F8;
    //     //   }
    //     // }
    //     .cols{
    //       background: #fff;
    //       padding: 0;
    //       // border:0;
    //       &.cols-tb{
    //         //  border: solid 1px #e5e5e5;
    //       }
    //       span{
    //         // border: solid 1px #e5e5e5;
    //         // padding: .4rem .3rem;
    //         line-height: 1.5rem;
    //         display: block;
    //         text-align: center;
    //         font-size: .55rem;
    //         border-bottom:0; 
    //         &.top{
    //           // border-color: rgba(255, 255, 255,0);
    //           // border:0;
    //           // border-top: solid 1px #e5e5e5;
    //           // border-left: solid 1px #e5e5e5;
    //           &.top2{
    //             // border-right: solid 1px #e5e5e5;
    //           }
    //         }
    //         &.desc{
    //           flex:1;
    //           height:100%;
    //           justify-content: center;
    //           align-items: center;  
    //           display: flex;
    //           // border-top:0;
    //           // border-right:0;
    //           // border-bottom: solid 1px #e5e5e5;
    //           &.first{
    //             // border-top: solid 1px #e5e5e5;
    //           }
    //         }
    //       }
    //     }
    //     .tleft{
    //       border-left: 0;
    //     }
    //   }
    // }
    
    .meal-table2{
      height: 100%;
      max-height: 17rem;
      font-size: 0.28rem;
      color: #86939a;
      background-color: #fff;
      width: 100%;
      -webkit-overflow-scrolling: touch;
      position: relative;
      top: 0;
      overflow: hidden;
      
      table {
        color: #666;
        font-size: .8rem;
        width: 100%;
        border-collapse: collapse;
        border-bottom: solid 1px #E5E5E5;
        border-right: solid 1px #E5E5E5;
      }
      tr{
        position: relative;
        background: #fff;
        :nth-child(odd) {
          background: #fff;
        }
        &.tr-first td{
          background-color: #F8F8F8;
          font-size: 0.55rem;
          padding: 0;
          border-top:0;
          border-bottom:0;
          span{
            font-size: 0.55rem;
            background-color: #F8F8F8;
            flex:1;
            height:100%;
            justify-content: center;
            align-items: center;  
            display: flex;
            padding: 0 0.3rem;
            border-top: solid 1px #E5E5E5;
            border-bottom: solid 1px #E5E5E5;
          }
        }
        td{
          height:1.5rem;
          font-size: 0.6rem;
          overflow: hidden;
          padding: 0 .3rem;
          background: #fff;
          border: solid 1px #e5e5e5;
          text-align: center;
          &.cross{
            border: 0;
            span.top{
              border-left: solid 1px #E5E5E5;
              border-right: solid 1px #E5E5E5;
            }
            span.top2{
              border-left:0;
              border-right: solid 1px #E5E5E5;
            }
            &.no-mtitle{
              span.top2{
                border-left:solid 1px #E5E5E5;
              }
            }
           
          }
          &.fcols{
            border-left:0;
          }
          &.cols-tb{
            border-top:0; 
          }
        }
        .cols{
          padding: 0;
          border-left:0;
          border-right:0;
          &.no-mtitle{
            border-left:solid 1px #E5E5E5;
          }
          &.cols-tb{
            border-top:0; 
            
          }
          span{
            line-height: 1.5rem;
            display: block;
            text-align: center;
            border-bottom:0; 
            font-size: 0.6rem;
            border-right: solid 1px #e5e5e5;

            &.desc{
              flex:1;
              height:100%;
              justify-content: center;
              align-items: center;  
              display: flex;
              border-left: solid 1px #e5e5e5;
              border-right: solid 1px #e5e5e5;
              padding:  0 0.3rem;
              .intext{
                overflow: hidden;
                white-space: normal;
                word-break: break-all;
                border-right:0;
                line-height: 150%;
              }
              &.first{
              }
            }
          }
        }
        .tleft{
          border-left: 0;
          background-color: #fff;
        }
      }
    }
    


    .rows {
        position: relative;
        z-index: 3;
    }
    
    .cross {
        position: relative;
        z-index: 5;
    }

   

    .fs13 {
      font-size: .65rem;
    }
    // title 样式修改
    .normal-select-block-title{
        padding: 0;
        &.bhb {
          &::after {
            margin-left: 0;
          }
        }
    }
    .img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px
    }
</style>

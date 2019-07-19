# table 
> A component which used iScroll-probe for mobile

## Usage
```vue
<template>
    <div class="table-demo-container">
        <cTable
        ></cTable>
    </div>
</template>
<script>
import cTable from 'table'

export default {
  data() {
    return {
      tableHeader: [
          {
            prop: 'year',
            label: '年度',
            width: "",
            minWidth: '100',
            maxWidth: '',
            align: 'center',
            fixed: true,
          },
          {
            prop: 'age',
            label: '年龄',
            width: "",
            minWidth: '100',
            maxWidth: '',
            align: 'center',
            fixed: true,
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
            icon: 'help',
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
        ], 
    }
  },
  components: {
    cTable
  }
}
</script>
```

## API

| Option | type | description |
| ----- | ----- | ----- |
| rootSize | Number(default: 40)  | 根据html fontSize算出rem |
| showHeader | Boolean(default: true)  | 是否显示header |
| headCellStyle | Object(default: {background: '#f2f2f2',color: '#333',fontWeight: 'bold'})  | 头部样式 |
| stripe | Boolean(default: true)  | 是否斑马背景 #f8f8f8 |
| tableHeader | Array( [{}] )  | tableHeader 详解如下，和element方式相同 |
| prop | String  | tableHeader 配置属性，后期数据根据这个循环，甚至一些事件名，必须保持唯一 |
| width/minWidth | String/Number  | 同样式属性，必须合法 |
| align | String  | 对齐样式 |
| fixed | Boolean  | 是否固定本行 |
| icon | String  | 表头icon（基于bxs组件），会emit(head.prop)事件 |
| tableBody | Array(default: 0)  | tableBody，与element-ui传值相同 |

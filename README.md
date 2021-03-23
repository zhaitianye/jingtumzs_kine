# jingtumzs_kline

源码来源于 [jcc_kline](https://github.com/JCCDex/jcc_kline) v0.2.8 版本，做了一些修改。


## Installtion

```shell
npm install jingtumzs_kline
```

## 快速上手

引入jcc_kline

``` javascript
// 引入jcc_kline
import kline from 'jingtumzs_kline'

Vue.use(kline)

```
## 组件

### K线图

```vue
<jKline v-on:listenToChildEvent='changeCycle' :kline-data-obj='klineDataObj' :kline-config='klineConfig'></jKline>
```

## 补充说明

本控件只支持 vue2.x 不支持vue3.x 升级3.x的用户请不用尝试，会踩很多坑
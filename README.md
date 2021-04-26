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

如果是pc端请使用 0.0.3 版本，或者签出此版本自行修改。后面的改动可能不会对之前的兼容


var volumeOption = {
    backgroundColor: '#161b21', // K线图背景色，默认'#161b21'
    animation: false, // 是否开启动画。
    tooltip: { // 提示框组件。
        trigger: 'axis', //触发类型。当前为坐标轴触发
        animation: false,
        axisPointer: { // 坐标轴指示器配置项。
            type: 'cross', // 指示器类型。当前为十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
            link: { xAxisIndex: 'all' }
        }
    },
    grid: [ // 直角坐标系内绘图网格
        {
            top: 20,
            left: 5,
            right: 65,
            bottom: 5, // grid 组件离容器下侧的距离。
            // backgroundColor: "#1b2229", // 网格背景色
            borderColor: '#1b2229', // 网格的边框颜色
            show: true // 是否显示直角坐标系网格。
        }
    ],
    xAxis: [ // 直角坐标系 grid 中的 x 轴
        {
            type: 'category',
            gridIndex: 0,
            // scale: true,
            boundaryGap: true,
            axisLine: {
                onZero: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisPointer: {
                z: 100,
                label: {
                    show: false
                }
            },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        }
    ],
    yAxis: [ // 直角坐标系 grid 中的y轴
        {
            scale: true,
            gridIndex: 0,
            splitNumber: 2,
            position: 'right',
            splitLine: {
                lineStyle: {
                    color: '#37404b',
                    type: 'dashed',
                    opacity: 0.6
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#37404b'
                }
            },
            axisLabel: {
                show: true,
                margin: 0,
                color: '#9aa4ac',
                fontSize: 12,
                verticalAlign: 'middle'
            }
        }
    ],
    dataZoom: [ // 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响
        {
            id: 'dataZoomX',
            throttle: 0,
            type: 'inside',
            filterMode: 'filter', // 当前数据窗口外的数据，被 过滤掉。即会影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉
            start: 60,  // 数据窗口范围的起始百分比
            end: 100, // 数据窗口范围的结束百分比
            minSpan: 5 // 用于限制窗口大小的最小值（百分比值）
        }
    ],
    series: [ // 系列列表。每个系列通过 type 决定自己的图表类型
        {
            name: 'Volume',
            type: 'bar',  // 柱状/条形图
            itemStyle: {
                normal: {
                    color: function (param) { // 柱条的颜色
                        return param.value[2] <= 0 ? '#ee4b4b' : '#42B983';
                    }
                }
            }
        }
    ]
};

var volumeMoobileOption = {
    backgroundColor: '#161b21', // K线图背景色，默认'#161b21'
    animation: false, // 是否开启动画。
    axisPointer: { // 坐标轴指示器（axisPointer）的全局公用设置,坐标轴指示器是指示坐标轴当前刻度的工具
        link: { xAxisIndex: 'all' },
        label: { // 坐标轴指示器的文本标签
            backgroundColor: '#232b34', // 背景色
            fontSize:22, // 字体大小
        }
    },
    tooltip: { // 提示框组件。
        trigger: 'axis', //触发类型。当前为坐标轴触发
        animation: false,
        axisPointer: { // 坐标轴指示器配置项。
            type: 'cross', // 指示器类型。当前为十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。
            link: { xAxisIndex: 'all' }
        }
    },
    grid: [ // 直角坐标系内绘图网格
        {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10, // grid 组件离容器下侧的距离。
            // backgroundColor: "#1b2229", // 网格背景色
            // borderColor: '#1b2229', // 网格的边框颜色
            // show: true // 是否显示直角坐标系网格。
            containLabel: true, // 这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
        }
    ],
    xAxis: [ // 直角坐标系 grid 中的 x 轴
        {
            type: 'category',
            gridIndex: 0,
            // scale: true,
            boundaryGap: true,
            axisLine: {
                onZero: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisPointer: {
                z: 100,
                label: {
                    show: false
                }
            },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        }
    ],
    yAxis: [ // 直角坐标系 grid 中的y轴
        {
            scale: true, // 只在数值轴中（type: 'value'）有效
            position: 'right',
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示
                show: false // false代表不显示
            },
            splitLine: { // 坐标轴在 grid 区域中的分隔线
                lineStyle: { // 分割线样式
                    color: '#ECEEF3', // 分隔线颜色
                    type: 'solid', // 分隔线线的类型，dotted表示点虚线
                    // opacity: 0.6
                }
            },
             axisLine: {
                // 坐标轴轴线
                show: true,
                lineStyle: {
                    color: "#666",
                    type: "solid", // (实线：'solid'，虚线：'dashed'，星罗棋布的：'dotted')
                },
            },
            axisLabel: {
                // 坐标轴刻度标签的相关设置
                show: true, // 是否显示刻度标签
                margin: 10, // 刻度标签与轴线之间的距离
                color: "#666", // 刻度标签文字的颜色
                fontSize: 12, // 刻度标签文字的字体大小
                verticalAlign: "center", // 文字垂直对齐方式，默认自动
            },

            splitNumber: 2, // 
        }
    ],
    dataZoom: [ // 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响
        {
            id: 'dataZoomX',
            throttle: 0,
            type: 'inside',
            filterMode: 'filter', // 当前数据窗口外的数据，被 过滤掉。即会影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉
            start: 80,  // 数据窗口范围的起始百分比
            end: 100, // 数据窗口范围的结束百分比
            minSpan: 5 // 用于限制窗口大小的最小值（百分比值）
        }
    ],
    series: [ // 系列列表。每个系列通过 type 决定自己的图表类型
        {
            name: 'Volume',
            type: 'bar',  // 柱状/条形图
            itemStyle: {
                normal: {
                    color: function (param) { // 柱条的颜色
                        return param.value[2] <= 0 ? '#ee4b4b' : '#42B983';
                    }
                }
            }
        }
    ]
};

export { volumeOption, volumeMoobileOption };
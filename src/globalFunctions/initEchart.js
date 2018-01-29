// 引入基本模板
const echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')//引入折线图
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/grid')
require('echarts/lib/component/legend')
require('echarts/lib/component/markPoint')
require('echarts/lib/component/markLine')
require('echarts/lib/component/toolbox')
/**
 * [重构new_echarts的legend属性函数]
 * @Author   jok
 * @DateTime 2017-12-19T15:10:31+0800
 * @param title       [图表大标题]
 * @param menuObj     [栏目标题]
 * @param columnData  [栏目数据]
 * @param xAxiskey    [x轴数据key值]
 * @param selectedArr [默认首次不展示的数据]
 */
const initEchart = (title, menuObj, columnData, xAxiskey, selectedArr, lineChartBox) => {
	// console.log(menuObj,columnData)
	// 根据要展示的menuObj的，重构columnData,将不需要展示的去掉
    let [columnseries,labelArr] = [[],[]];//解构赋值

    for (let i = 0; i < menuObj.length; i++) {
    	let prop = menuObj[i].prop;
    	// console.log(prop);
    	if (prop != xAxiskey) {
	    	labelArr.push(menuObj[i].label);
	        columnseries[i] = {
	            name : menuObj[i].label,
	            itemStyle : { normal: {label : {show: true}}},
	            type : 'line',
	            data : columnData[prop],
	            markLine : {
	                data : [{type : 'average', name: '平均值'}]
	            }
	        }
    	}
    }
    let jsonArr = {'legendName':labelArr,'columnseries':columnseries,'xAxisData':columnData[xAxiskey],'title':title,'selectedArr':selectedArr,'lineChartBox': lineChartBox};
    return new_echarts(jsonArr);
}

// 初始化折线图表
const new_echarts = (jsonArr) => {
	// 基于准备好的dom，初始化echarts实例
	// var myChart = echarts.init(document.getElementById('linechart'));
	var myChart = echarts.init(jsonArr.lineChartBox);

	// 指定图表的配置项和数据
	var option = {
	    title: {
	    	top: '10',
	    	left: '10',
	        text: jsonArr.title
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    toolbox: {
	        show : true,
	        top: '10',
	        right: '30',
	        feature : {
	            saveAsImage : {show: true},
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            dataView : {show: true, readOnly: false},
	            mark : {show: true}
	        }
	    },
	    grid: {
	        left: '10%',
	        right: '10%',
	        bottom: '3%',
	        top: '30%',
	        containLabel: true,
	        align: 'center',
	    	textStyle: {
	    		fontsize:'20'
	    	},
	    },
	    legend: {
	    	right: '100',
	    	left: '100',
	    	top: '10%',
	    	itemHeight: '10',
	    	inactiveColor: '#BBBBBB',
	    	orient: 'horizontal',
	    	textStyle: {
	    		fontSize:'14',
	    		fontWeight: '400'
	    	},
	        // selected: jsonArr.selectedArr,
	        data: jsonArr.legendName,
	    },
	    xAxis: {
	        data: jsonArr.xAxisData,
	        axisLabel:{
	         //X轴刻度配置
	         // interval:0, //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
	          // rotate: 90,
	        // formatter:function(val){
	        //      return val.split("").join("\n");
	        //      } //横轴信息文字竖直显示
	        }
	    },
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series: jsonArr.columnseries,
	};
	// console.log(option)
	// 使用刚指定的配置项和数据显示图表，true数据改变更新图表，不加true属性会巨坑
	myChart.setOption(option, true);
	window.onresize = myChart.resize;
}

export default initEchart
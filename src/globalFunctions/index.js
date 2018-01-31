import ExportToExcel from "./exportExcel" //导出表格
import InitEchart from "./initEchart" //初始化echart折线图
import GlobalRenderHeader from "./globalRenderHeader" //渲染表头
import GlobalSort from "./globalSort" //渲染表头
import request from "./request" //全局请求
import changeTableHeadKeysNameCh from './changeTableHeadKeysNameCh'

//main.js中import注册全局函数，可以通过this直接应用以下函数
export {
	request, //全局ajax请求函数
	ExportToExcel, //导出表格
	InitEchart, 	//初始化echart图表函数
	GlobalRenderHeader,  	//渲染element-table的菜单栏
	GlobalSort,  //element-table-column排序
	changeTableHeadKeysNameCh, //表格下载标题，echarts图表标题
} 

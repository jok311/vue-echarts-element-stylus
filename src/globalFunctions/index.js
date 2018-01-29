import ExportToExcel from "./exportexcel" //导出表格
import InitEchart from "./initEchart" //初始化echart折线图
import GlobalRenderHeader from "./renderHeader" //渲染表头
import GlobalSort from "./globalSort" //渲染表头


//main.js中import注册全局函数，可以通过this直接应用以下函数
export {ExportToExcel, InitEchart, GlobalRenderHeader, GlobalSort}

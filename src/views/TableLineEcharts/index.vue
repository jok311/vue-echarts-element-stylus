<template>
	<div class="kachaIndex">

		<!-- 头部 -->
		<div class="navheader" ref="navH">
			<!-- 查询按钮 -->
	        <el-button :loading="queryBtnLoading" type="primary" size="small"  @click="GetStatisticsData" icon="el-icon-search">查询</el-button>
			<!-- 日期选择 -->
			<element-date-picker :startTime="startTime" @changesTime="timeVal"></element-date-picker>

			<!-- 导出 -->
			<el-button type="primary" size="small" @click="ExportExcel(tableData)" class="exportexcel" icon="el-icon-document">导出</el-button>
		</div>

		<!-- 表格 -->
		<element-table-box  :tableData="tableData, tableHeight, MenuHeaderData">
<!-- 		  <template slot-scope="scope">
		    <span>
		      <span>索引：{{scope.$index}}</span>
		      <span>姓名：{{scope.item}}</span>
		      <span>姓名：{{scope.row}}</span>
		    </span>
		  </template>	 -->		
		</element-table-box>
	</div>
</template>
<script>
	import moment from 'moment'//时间格式化插件
	import ElementDatePicker from 'globalComponents/ElementDatePicker'//日期

	import ElementTableBox from './ElementTableBox'//发现*酒款表格
	import {MenuHeaderData, sqlParamsArr} from './MenuHeaderData' //发现*酒款菜单栏标题数据

	import Mock from 'mockjs'

	const List = []
	const count = 50

	for (let i = 0; i < count; i++) {
	  List.push(Mock.mock({
	    id: '@increment',
	    title: '@ctitle(12, 15)',
	    'cname|1': ['jok', '周周', 'kitty', 'smile'],
	    timestamp: +Mock.Random.date('T'),
	    importance: '@integer(1, 3)',
	    'status|1': ['published', 'draft', 'deleted'],
	    dateTime: () => {
	    	let month = Mock.Random.integer(1,12);
	    	let day = Mock.Random.integer(1,30);
	    	month = month > 10 ? month : '0'+month;
	    	day > 10 ? day : '0'+day;
	    	return Mock.Random.integer(2016,2017)+'-'+month+'-'+day
	    },
	    buyUV: '@integer(30, 100)',
	    collectionUV: '@integer(500,750)',
	    shoppingCart: '@integer(100,250)',
	   	"paySum|1000-10000.1-2": 1,
	    "price|50-1000.1-2": 1,
	    allSourcePV: '@integer(3000, 5000)',
	    allSourceUV: '@integer(1000,3000)',	    

	  }))
	}

	console.log(List)

	export default {
		data() {
			return {
				MenuHeaderData: MenuHeaderData, //发现*酒款菜单栏标题数据
				// ElementDatepicker设置默认开始时间，结束时间
	        	startTime: moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00'),
	        	endTime: moment().subtract(1, 'days').format('YYYY-MM-DD 23:59:59'),
		        tableData: [],// 表格数据
		        theadData: [],//菜单栏数据（名称+key值）,el-table和echart都用到
		        theadNameCh: [],//菜单名称
		        theadKeys: [],//菜单栏key值
		        tableHeight: null,//表格高度，控制表格头部固定
		        queryBtnLoading: false, //查询
			}
		},
		components:{
			ElementDatePicker, ElementTableBox
		},

		created() {
			// 首次进入页面，自动获取数据
			this.GetStatisticsData()

			// 处理echart图表数据，下载表格数据
			this.getDataNameKeys()
		},
		mounted() {
			// console.log(document.body.offsetHeight,document.documentElement.clientHeight,window.innerHeight,window.screen.height )
			// 监听获取tag标签高度,让表格高度自适应
			let winH = document.documentElement.clientHeight;
			let navH = this.$refs.navH.offsetHeight;
			this.tableHeight = winH - navH;
		},
		methods:{

			/**
			 * 处理下载表格数据，表格头部，echart图表数据
			 * @Author   jok
			 * @DateTime 2017-12-12T15:23:37+0800
			 */
			getDataNameKeys() {
				let [dataKeysArr, dataNameArr, dataNameKeysArr] = [[], [], []];

				for(let key of Object.keys(this.MenuHeaderData)) {
					for(let index of Object.keys(this.MenuHeaderData[key]['dataKeys'])) {

						let keys = this.MenuHeaderData[key]['dataKeys'][index];
						let namech = `${this.MenuHeaderData[key]['label']}${keys}`;
						// keys值
						dataKeysArr.push(keys)
						// 中文名
						dataNameArr.push(namech)
						//keys对应的中文名
						keys != 'days' ? dataNameKeysArr.push({label: namech, prop: keys}) : ''
					}
				}

				this.theadKeys = dataKeysArr
				this.theadNameCh = dataNameArr
				this.theadData = dataNameKeysArr
			},

			// 导出表格
			ExportExcel(tableData) {
				/** common/js/exportexcel.js，导出表格全局函数*/
				this.ExportToExcel(tableData,this.theadKeys,this.theadNameCh);
			},

	        // 根据字段参数对应日期获取数据
	        GetStatisticsData(){
	        	// loading遮罩
		        const loading = this.$loading({
		          lock: true,
		          customClass: 'globalLoading',
		          text: '正在加载数据...',
		          spinner: 'el-icon-loading',
		          background: 'rgba(0, 0, 0, 0)'
		        });
		        this.queryBtnLoading = true //查询按钮加载状态


			    let params = new URLSearchParams();

			    // 开始时间和结束时间
	        	let dataTime = {startTime:this.startTime,endTime:this.endTime};
	        	// console.log(dataTime)
			    params.append('dataTime',JSON.stringify(dataTime)); // 转换传参结构

			    params.append('sqlParamsArr',JSON.stringify(sqlParamsArr)); // ./MenuHeaderData.js的sql对象


	            this.$http.post(`http://zqchen.9kacha.com/data/statistics/controller/getTitleSourceData.Controller.php`,params)
	            .then(function(res){
	                // console.log(res.data)
	                this.tableData = res.data;	//表格数据
	                loading.close();//关闭loading遮罩
	                this.queryBtnLoading = false //查询按钮加载状态
	            }.bind(this)).catch(function(err){
	              console.log(err);
	            })

	        },

			/**
			 * 监听子组件datepciker时间变化
			 * @DateTime 2017-12-07T18:39:24+0800
			 */
			timeVal(val) {
				// console.log(val)
				this.startTime = val+' 00:00:00';
				this.endTime = val+' 23:59:59';
			},

		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// @import "../../common/styl/pre.styl"
.kachaIndex
	display inline-block
	width 100%
	min-width 1050px
	.navheader
		position: relative;
		padding 8px 22px 8px 16px
		border-bottom 1px solid #E6EBF5
		.exportexcel
			position: absolute;
			right: 15px;
		.el-button--primary
			font-size $font-size-medium !important
			padding 9px 28px
			span
				margin-left -5px !important
			i
				position relative
				left -6px
			.el-icon-document
				padding-right 4px

.globalLoading
	margin-left 180px
</style>
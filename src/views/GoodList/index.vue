<template>
	<div class="kachaIndex">

		<!-- 头部 -->

		<div class="navheader" ref="navH">
			<!-- 查询按钮 -->
  		<el-button :loading="queryBtnLoading" type="primary" size="small"  @click="fetchData" icon="el-icon-search">查询</el-button>
			<!-- 日期选择 -->
			<element-date-picker :startTime="startTime" @changesTime="timeVal"></element-date-picker>
			<!-- 导出表格 -->
			<el-button type="primary" size="small" @click="ExportExcel(tableData)" class="exportexcel" icon="el-icon-document">导出</el-button>
		</div>


		<!-- 表格 -->

		<element-table-box ref="tableBox"  :tableData="tableData, tableHeight, MenuHeaderData">
		  <template slot-scope="scope">
		    <span>
          <!-- 图标icon -->
          <i v-if="scope.item.icon" :class="scope.item.icon"></i>
		      <span v-if="scope.item.dataKeys">{{ scope.row | getTableColumn(scope.item.dataKeys) }}</span>
		    </span>

		  </template>			
		</element-table-box>
	</div>
</template>
<script>
	import moment from 'moment'//时间格式化插件
	import ElementDatePicker from 'globalComponents/ElementDatePicker'//日期

	import ElementTableBox from './ElementTableBox'//发现*酒款表格
	import {MenuHeaderData, sqlParamsArr} from './MenuHeaderData' //发现*酒款菜单栏标题数据
	import { getGoodList } from '@/api/goodList'

	export default {
		data() {
			return {
				MenuHeaderData: MenuHeaderData, //发现*酒款菜单栏标题数据
				// ElementDatepicker设置默认开始时间，结束时间
				startTime: moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00'),
				endTime: moment().subtract(1, 'days').format('YYYY-MM-DD 23:59:59'),

				tableData: [],// 表格数据
				tableHeadKeysNameCh: [],//菜单栏数据（名称+key值）,el-table和echart都用到
				tableHeadNameCh: [],//菜单名称
				tableHeadKeys: [],//菜单栏key值
				tableHeight: null,//表格高度，控制表格头部固定

				queryBtnLoading: false, //查询

				loadingOption: {
						lock: true,
						customClass: 'globalLoading',
						text: '正在加载数据...',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0)'
					}
			}
		},
		components:{
			ElementDatePicker, ElementTableBox
		},

		created() {
			// 首次进入页面，自动获取数据
			// this.GetStatisticsData()
			this.fetchData()

			// 处理echart图表数据，下载表格数据
			this.getDataNameKeys()

		},
		mounted() {
			// 监听获取tag标签高度,让表格高度自适应
			let winH = document.documentElement.clientHeight;
			let tableOffTop = this.$refs.tableBox.$el.getBoundingClientRect().top
			this.tableHeight = winH - tableOffTop - 5;
		},
		methods:{
			// 获取商品数据
	    fetchData() {
				// loading遮罩
				const loading = this.$loading(this.loadingOption);
				let params = new URLSearchParams();
				// 开始时间和结束时间
				let dataTime = {startTime:this.startTime,endTime:this.endTime};
				// console.log(dataTime)
				params.append('dataTime',JSON.stringify(dataTime)); // 转换传参结构

	      getGoodList(params).then(response => {
	      	// console.log(response.data.List)
          this.tableData = response.data.List;	//表格数据		        

          setTimeout(() => {loading.close()}, 500)

	      })
	    },			

			/**
			 * 处理下载表格数据，表格头部，echart图表数据
			 * @Author   jok
			 * @DateTime 2017-12-12T15:23:37+0800
			 */
			getDataNameKeys() {
				// 处理表格头部，echarts头部，标题和对应key值
				// 全局函数changeTableHeadKeysNameCh()
				// 返回值 return{tableHeadKeysNameCh, tableHeadKeys, tableHeadNameCh}
				const tableHeadData = this.changeTableHeadKeysNameCh(this.MenuHeaderData)

				this.tableHeadKeysNameCh = tableHeadData.tableHeadKeysNameCh				
				this.tableHeadKeys = tableHeadData.tableHeadKeys
				this.tableHeadNameCh = tableHeadData.tableHeadNameCh
			},

			// 导出表格
			ExportExcel(tableData) {
				/** common/js/exportexcel.js，导出表格全局函数*/
				this.ExportToExcel(tableData,this.tableHeadKeys,this.tableHeadNameCh);
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
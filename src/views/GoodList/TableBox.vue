<template>
  <div class="kacha-table-box">
    <el-table @sort-change="sortchange" tooltip-effect="dark" :data="tableArr" style="width: 100%" :height="tableHeight">

      <filters-table-column></filters-table-column>

      <el-table-column
        v-for="(item,i) in MenuHeaderData"
        v-if="item.hidden ? false : true"
        :align="item.align ? item.align : 'center' "
        :width="item.width ? item.width : '150'"
        :fixed="i < 2"
        :label="item.label+item.type"
        :column-key="item.dataKeys[0]"
        :sortable="item.sortable ? false : 'custom'"
        :prop="item.tip"
        :render-header="renderHeader"
        :key="i">

        <template slot-scope="scope">

          <!-- 图标icon -->
          <i v-if="item.icon" :class="item.icon"></i>

          <!-- 当前列展示的数据，可以一个展示多个数据-->
          <span v-if="item.dataKeys.length" v-for="(value, index) in item.dataKeys" :key="index">

            <!-- 非最后一个 -->
            <span v-if="index != item.dataKeys.length-1">{{ scope.row[value] }} /</span>
            <!-- 最后一个 -->
            <span v-if="index == item.dataKeys.length-1 && value.indexOf('pct') == -1"> {{ scope.row[value] }}</span>
          </span>

          <!-- 百分比 -->
          <span v-if="item.percentKeys">{{scope.row | getOnlyPercentData(item.percentKeys)}}</span>

        </template>

      </el-table-column>

    </el-table>



    

  </div>

</template>

<script>

import {MenuHeaderData, sqlParamsArr} from "./MenuHeaderData" //表格菜单栏标题数据
import FiltersTableColumn from "./FiltersTableColumn"
import GlbalTableBox from './GlobalTableBox'

  export default {
    data() {
      return {
        tableArr: [],//表格数据
        MenuHeaderData: MenuHeaderData //表格菜单栏标题数据
      }
    },
    props: ["tableData","tableHeight"],
    components: {FiltersTableColumn, GlbalTableBox},
    watch: {
      tableData(val) {
        this.tableArr = [...val]
      }
    },
    methods: {
      // 渲染表头
      renderHeader(createElement, { column, $index}){
        let columnData = column;
        /**GLobalRenderHeader函数在common/js/renderHeader.js*/
        return this.GlobalRenderHeader(createElement, columnData);
      },

      // 自定义排序，因为element自带的排序对json中的数字解析为字符串，出错
      sortchange(row) {
         /**GLobalRenderHeader函数在common/js/globalSort.js*/
        this.tableArr = this.GlobalSort(row, 'upTime', this.tableData)
      },

    }
  }
</script>
<style lang="stylus">
.kacha-table-box
  margin 8px 16px 0 16px
  border 1px solid #e6ebf5
  box-sizing border-box
  .el-table
    box-sizing border-box
    .caret-wrapper
      position absolute
      top 60%
      transform translateY(-50%)
  .el-table .is-hidden .cell
    visibility visible
</style>
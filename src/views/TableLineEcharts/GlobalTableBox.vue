<template>

      <el-table-column      
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
          <slot></slot>
        </template>     
      </el-table-column>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    props: ["item", "i"],
    created() {
      // console.log(this.item)
    },
    mounted() {
      // console.log(this)
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
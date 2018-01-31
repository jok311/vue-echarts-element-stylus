<template>
      <el-table-column
        align="center"
        width="150"
        fixed
        label="筛选推荐人"
        :prop="filtersItem.tip"
        :render-header="renderHeader"
        :filters="[
              { 'text': '咔嚓优选团 kitty', 'value': '咔嚓优选团 kitty' },
              { 'text': '咔嚓优选团 周周', 'value': '咔嚓优选团 周周' },
              { 'text': '咔嚓优选团 Smile', 'value': '咔嚓优选团 Smile' },
              { 'text': '咔嚓优选团 大俊', 'value': '咔嚓优选团 大俊' },
              { 'text': '咔嚓优选团 Reina', 'value': '咔嚓优选团 Reina' },
              { 'text': '咔嚓优选团 Cci', 'value': '咔嚓优选团 Cci' },
              { 'text': '咔嚓优选团 Lucky', 'value': '咔嚓优选团 Lucky' },
            ]"      
        :filter-method="filterTag"
        filter-placement="bottom-end">

        <template  slot-scope="scope">
          <span>{{ scope.row.detailName }}</span>
        </template>

      </el-table-column>  
</template>

<script>
  export default {
    data() {
      return {
        filtersItem: {
            "label": "推荐人",
            "prop": "detailName",
            "type": "",
            "dataKeys": ["detailName"],
            "tip": "酒款推荐人",
            "sortable": "notSortabel",
            "filters": [
            { 'text': '咔嚓优选团 kitty', 'value': '咔嚓优选团 kitty' },
            { 'text': '咔嚓优选团 周周', 'value': '咔嚓优选团 周周' },
            { 'text': '咔嚓优选团 Smile', 'value': '咔嚓优选团 Smile' },
            { 'text': '咔嚓优选团 大俊', 'value': '咔嚓优选团 大俊' },
            { 'text': '咔嚓优选团 Reina', 'value': '咔嚓优选团 Reina' },
            { 'text': '咔嚓优选团 Cci', 'value': '咔嚓优选团 Cci' },
            { 'text': '咔嚓优选团 Lucky', 'value': '咔嚓优选团 Lucky' },
            ]
          },         
      }
    },
    // props: ["filtersItem"],
    watch: {
      filtersItem(val) {
        console.log(val)
      }
    },
    methods: {

      filterTag(value, row) {
        return row.detailName === value;
      },

      // 渲染表头
      renderHeader(createElement, { column, $index}){
        let columnData = column;
        /**GLobalRenderHeader函数在common/js/renderHeader.js*/
        return this.GlobalRenderHeader(createElement, columnData);
      },
    }
  }
</script>
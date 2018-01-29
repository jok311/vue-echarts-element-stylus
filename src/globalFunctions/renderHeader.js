// render函数，参照vue官方文档
//  https://cn.vuejs.org/v2/guide/render-function.html
const GlobalRenderHeader = (createElement, column) => {
  return createElement(
    'span',
    {
      'class': 'renderTableHead'
    },

    [
      // {String | Array}
      // 子节点 (VNodes)，由 `createElement()` 构建而成，
      // 或使用字符串来生成“文本节点”。可选参数。
      createElement('el-tooltip',{
          class: 'cell-s-tip',
          props: {
            content: column.property,
            effect: 'dark',
            placement: 'top-start'
          }
      },[
        createElement("i",{
          class: 'el-icon-question',
          style: 'padding-right: 4px',
        })
      ]),

      column.label,//标题
    ]
  )
}

export default GlobalRenderHeader
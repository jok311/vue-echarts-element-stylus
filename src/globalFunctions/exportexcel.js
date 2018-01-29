import moment from 'moment'//时间格式化插件

// 导出表格需要npm install几个插件
// @Author   jok QQ:425617305
// file-loader，file-saver，tableexport，xlsx，script-loader
// 导出表格
const export_to_excel = (list,thead_keys,thead_namech) => {
  require.ensure([], () => {
    const { export_json_to_excel } = require('./exporttoexcel/Export2Excel');
    // 处理名称keys对应的数据
    const data = list.map(v => thead_keys.map(j => v[j]));
    // console.log(data)

    //excel栏目名称，数据，表格命名
    export_json_to_excel(thead_namech, data, moment().format('YYYY-MM-DD HH:mm'));
  })
}

export default export_to_excel
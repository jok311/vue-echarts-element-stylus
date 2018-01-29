// 自定义排序，因为element自带的排序对json中的数字解析为字符串，出错
const GlobalSort = (row, reverseKey, tableData) => {
  const default_table_data = [...tableData];
  let tableArr = [...tableData];
  let orderKey = row.column ? row.column.columnKey : null //按json该Key排序
  if (orderKey == null || orderKey == reverseKey) {
      // 当为日期时，按默认数据的升降排序
      tableArr = (orderKey == reverseKey && row.order == 'ascending') ? [...default_table_data.reverse()] : [...default_table_data];
  }else{
      // 当该列为整数(days除外的列)，按此排序
      tableArr.sort(compare(orderKey,row.order));
  }
  return tableArr
}

// 根据row.order排升降序序
const compare = (prop,order) => {
  return (a,b) => {
      return order == 'ascending' ? (a[prop] - b[prop]) : (b[prop] - a[prop]);
  }
}

export default GlobalSort
/**
 * 处理下载表格数据，表格头部，echart图表数据
 * @Author   jok
 * @DateTime 2017-12-12T15:23:37+0800
 */
const changeTableHeadKeysNameCh = (HeadData) => {
	let [tableHeadKeysNameCh, tableHeadKeys, tableHeadNameCh] = [[], [], []];

	for(let key of Object.keys(HeadData)) {
		for(let index of Object.keys(HeadData[key]['dataKeys'])) {

			let keys = HeadData[key]['dataKeys'][index];
			let namech = `${HeadData[key]['label']}${keys}`;
			// keys值
			tableHeadKeys.push(keys)
			// 中文名
			tableHeadNameCh.push(namech)
			//keys对应的中文名
			keys != 'days' ? tableHeadKeysNameCh.push({label: namech, prop: keys}) : ''
		}
	}

	return{tableHeadKeysNameCh, tableHeadKeys, tableHeadNameCh}
}
export default changeTableHeadKeysNameCh
import Mock from 'mockjs'
import goodListAPI from './goodList'

// Mock.setup({
//   timeout: '350-600'
// })

// 商品列表
Mock.mock(/\/good\/list/, 'get', goodListAPI.getGoodList)

export default Mock

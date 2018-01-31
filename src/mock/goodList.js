import Mock from 'mockjs'

const createdList = () => {
const List = []
const count = 100

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
      id: '@increment',
      title: '@ctitle(15, 20)',
      url: 'https://github.com/jok311/vue-echarts-element-stylus',
      'cname|1': ['jok', '周周', 'kitty', 'smile'],
      timestamp: +Mock.Random.date('T'),
      importance: '@integer(1, 3)',
      'status|1': ['published', 'draft', 'deleted'],
      dateTime: () => {
        let month = Mock.Random.integer(1,12);
        let day = Mock.Random.integer(1,30);
        month = month >= 10 ? month : '0'+month;
        day = day >= 10 ? day : '0'+day;
        return Mock.Random.integer(2016,2017)+'-'+month+'-'+day
      },
      buyUV: '@integer(30, 100)',
      collectionUV: '@integer(500,750)',
      shoppingCart: '@integer(100,250)',
      "paySum|1000-10000.1-2": 1,
      "price|50-1000.1-2": 1,
      allSourcePV: '@integer(5000, 20000)',
      allSourceUV: '@integer(3000,5000)',
      appSourcePV: '@integer(4000, 10000)',
      appSourceUV: '@integer(1000,3000)',
      weixinSourcePV: '@integer(4000, 10000)',
      weixinSourceUV: '@integer(1000,3000)',      
      baiduSourcePV: '@integer(3000, 5000)',
      baiduSourceUV: '@integer(1000,2000)',
    }))
  }
  return List  
} 

export default {
   //商品列表
  getGoodList: config => {
    // console.log(createdList())
    let List = createdList() //生成数据
    return {List}
  },
                               
  getList: config => {
    const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: () => ({
    id: 120000000001,
    author: { key: 'mockPan' },
    source_name: '原创作者',
    category_item: [{ key: 'global', name: '全球' }],
    comment_disabled: true,
    content: '<p>我是测试数据我是测试数据</p><p><img class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
    content_short: '我是测试数据',
    display_time: +new Date(),
    image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
    platforms: ['a-platform'],
    source_uri: 'https://github.com/PanJiaChen/vue-element-admin',
    status: 'published',
    tags: [],
    title: 'vue-element-admin'
  }),
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
}

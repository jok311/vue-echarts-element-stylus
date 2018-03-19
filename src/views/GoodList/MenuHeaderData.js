const MenuHeaderData = [
          {
            "label": "上架时间", 	//标题文字
            "prop": "dateTime", //标题key，处理表格下载数据用到,折线图表用到
            "type": "", //label + type = 表格th标题
            "dataKeys": ["dateTime"], //当前列展示的数据key值，可以一个展示多个值,处理表格下载数据用到
            "icon": "el-icon-time", // 图标icon
            "tip": "上架时间" //当前行数据解析
          },
          {
            "label": "商品标题",
            "prop": "titlr",
            "type": "",
            "dataKeys": ["title"],
            "tip": "商品标题",
            "align": "left",
            "width": "200",
            "isSortable": false
          },

          {
            "label": "推荐人",
            "prop": "cname",
            "type": "",
            "dataKeys": ["cname"],
            "tip": "发布人",
            "isSortable": false,
            "hidden": true,
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

          {
            "label": "商品价格",
            "prop": "price",
            "type": "",
            "dataKeys": ["price"],
            "tip": "商品价格"
          },

          {
            "label": "商品成交额",
            "prop": "paySum",
            "type": "",
            "dataKeys": ["paySum"],
            "tip": "商品成交额"
          },
          {
            "label": "商品成交量",
            "prop": "buyUV",
            "type": "",
            "dataKeys": ["buyUV"],
            "tip": "商品成交量"
          }, 
          {
            "label": "访客",
            "prop": "allSource",
            "type": "UV/PV",
            "dataKeys": ["allSourceUV, allSourcePV"],
            "tip": "商品浏览量PV，访客量UV"
          },                    
          {
            "label": "总访客量",
            "prop": "allSource",
            "type": "UV",
            "dataKeys": ["allSourceUV"],
            "tip": "商品浏览量PV，访客量UV"
          },                    
          {
            "label": "总浏览量",
            "prop": "allSource",
            "type": "PV",
            "dataKeys": ["allSourcePV"],
            "tip": "商品浏览量PV，访客量UV"
          },           
          {
            "label": "收藏量",
            "prop": "collectionUV",
            "type": "",
            "dataKeys": ["collectionUV"],
            "tip": "加入收藏夹的用户UV"
          },
          {
            "label": "购物车",
            "prop": "collectionUV",
            "type": "",
            "dataKeys": ["collectionUV"],
            "tip": "加入购物车的用户UV"
          },
         
          {
            "label": "百度浏览访客",
            "prop": "baiduSource",
            "type": "PV/UV",
            "dataKeys": ["baiduSourcePV", "baiduSourceUV"],
            "tip": "通过百度渠道来源的，商品浏览量PV，访客量UV"
          },           
          {
            "label": "微信浏览访客",
            "prop": "weixinSource",
            "type": "PV/UV",
            "dataKeys": ["weixinSourcePV", "weixinSourceUV"],
            "tip": "通过微信渠道（公众号，订阅号，分享）来源的，商品浏览量PV，访客量UV"
          }, 
        ];



const sqlParamsArr = [
  {
    "table": "view_log",
    "idKey": "allSource",
    "getParams": ["upTime", "recordTitle", "adId", "recordPrice", "detailName" ,"recordLink"],
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "orderByParams": "upTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "glanceDetail",
        "type": "="
      },
    ]
  },

  {
    "table": "view_log",
    "idKey": "clickbuy",
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "clickbuy",
        "type": "="
      }
    ]
  },

  {
    "table": "view_log",
    "idKey": "catwinelowprice",
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "glanceDetail",
        "type": "="
      },
      {
        "key": "recordLink",
        "params": "%catwinelowprice%",
        "type": "LIKE"
      }
    ]
  },

  {
    "table": "view_log",
    "idKey": "wineLevel",
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "glanceDetail",
        "type": "="
      },
      {
        "key": "recordLink",
        "params": "%wineLevel%",
        "type": "LIKE"
      }
    ]
  },


  {
    "table": "view_log",
    "idKey": "kcPush",
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "glanceDetail",
        "type": "="
      },
      {
        "key": "recordLink",
        "params": "%kcPush%",
        "type": "LIKE"
      }
    ]
  },

  {
    "table": "view_log",
    "idKey": "kcWineDetailFloat",
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "glanceDetail",
        "type": "="
      },
      {
        "key": "recordLink",
        "params": "%kcWineDetailFloat%",
        "type": "LIKE"
      }
    ]
  },

  {
    "table": "view_log",
    "idKey": "kcIndexLunBo",
    "groupByParams": "adId",
    "countKey": "userId",
    "timeParams": "recordTime",
    "paramsArr": [
      {
        "key": "recordEvent",
        "params": "glanceDetail",
        "type": "="
      },
      {
        "key": "recordLink",
        "params": "%kcIndexLunBo%",
        "type": "LIKE"
      }
    ]
  },

];
// console.log(sqlParamsArr)

export {MenuHeaderData, sqlParamsArr}
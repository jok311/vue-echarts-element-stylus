const MenuHeaderData = [
          {
            "label": "日期", 	//标题文字
            "prop": "days", //标题key，处理表格下载数据用到,折线图表用到
            "type": "", //label + type = 表格th标题
            "dataKeys": ["upTime"], //当前列展示的数据key值，可以一个展示多个值,处理表格下载数据用到
            "icon": "el-icon-time", // 图标icon
            "tip": "酒款在选中日期的0点-24点的时间段内的各项数据" //当前行数据解析
          },
          {
            "label": "商品标题",
            "prop": "glancekacharigist",
            "type": "",
            "dataKeys": ["recordTitle"],
            "tip": "商品标题",
            "align": "left",
            "width": "200",
            "isSortable": false
          },

          {
            "label": "推荐人",
            "prop": "detailName",
            "type": "",
            "dataKeys": ["detailName"],
            "tip": "酒款推荐人",
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
            "prop": "recordPrice",
            "type": "",
            "dataKeys": ["recordPrice"],
            "tip": "商品价格"
          },
          {
            "label": "浏览量",
            "prop": "allSource",
            "type": "PV/UV",
            "dataKeys": ["allSourcePV", "allSourceUV"],
            "tip": "推荐酒款日浏览量，日访客量。"
          },
          {
            "label": "点击购买",
            "prop": "clickbuy",
            "type": "PV/UV",
            "dataKeys": ["clickbuyPV", "clickbuyUV"],
            "tip": "专家推荐酒款页面，点击购买按钮的日量，日人量。百分比： 专家推荐酒款页面点击购买按钮UV / 访问专家推荐酒款UV。"
          },
          {
            "label": "点购买PV转化",
            "prop": "clickbuy",
            "type": "",
            "dataKeys": [],
            "percentKeys": {
              "indexKey": "allSourcePV",
              "subKey": "clickbuyPV"
            },
            "isSortable": false,
            "tip": "点击购买按钮PV / 酒款浏览量PV"
          },
          {
            "label": "点购买UV转化",
            "prop": "clickbuy",
            "type": "",
            "dataKeys": [],
            "percentKeys": {
              "indexKey": "allSourceUV",
              "subKey": "clickbuyUV"
            },
            "isSortable": false,
            "tip": "点击购买按钮UV / 酒款浏览量UV"
          },
          {
            "label": "白菜价",
            "prop": "catwinelowprice",
            "type": "PV/UV",
            "dataKeys": ["catwinelowpricePV", "catwinelowpriceUV"],
            "tip": "白菜价栏目推荐酒款日浏览量，日访客量。"
          },
          {
            "label": "大牌美酒",
            "prop": "wineLevel",
            "type": "PV/UV",
            "dataKeys": ["wineLevelPV", "wineLevelUV"],
            "tip": "大牌美酒栏目推荐酒款日浏览量，日访客量。"
          },
          {
            "label": "PUSH",
            "prop": "kcPush",
            "type": " UV/PV",
            "dataKeys": ["kcPushUV", "kcPushPV"],
            "tip": "PUSH消息进来的专家推荐酒款日浏览量和日访问量"
          },
          {
            "label": "今日推荐",
            "prop": "kcWineDetailFloat",
            "type": " UV/PV",
            "dataKeys": ["kcWineDetailFloatUV", "kcWineDetailFloatPV"],
            "tip": "酒款信息页面今日推荐浮动广告进来的专家推荐酒款日浏览量和日访问量"
          },
          {
            "label": "轮播栏",
            "prop": "kcIndexLunBo",
            "type": " UV/PV",
            "dataKeys": ["kcIndexLunBoUV", "kcIndexLunBoPV"],
            "tip": "从轮播栏广告进来的专家推荐酒款日浏览量和日访问量"
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
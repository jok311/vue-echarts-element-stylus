// 列表时间转换函数 (在HTML页面的模板中使用)
const  formatTime = (timeStrap) => {
    var cusDate=timeStrap;
    var outputTime=null;

    var nowDate=new Date();  // 今天日期
    var oDate=new Date(cusDate);//.Format("yyyy-MM-dd HH:mm:ss"); 获取的时间

    if( nowDate.getMonth() != oDate.getMonth() ){ // 不在当前月份
        outputTime=oDate.Format("MM月dd日");
    }else{
        if(parseInt(nowDate.getDate())>parseInt(oDate.getDate())){
            outputTime=oDate.Format("MM月dd日");
        }else{
            // outputTime=oDate.Format("hh:mm");
            outputTime='今日';
        }
    }
    return outputTime;//+"+"+nowDate.getDate()+"+"+oDate.getDate()+"+"+nowDate.getMonth()+"+"+oDate.getMonth()+"+"+cusDate;
}


/*格式化时间*/
Date.prototype.Format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)){fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));}
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


// 保留两位小数
const tofix = (num) => {
    return Math.round(num*100)/100;
}

// 对象取出值变为数组，数组插入逗号
const arrJoin = (val) => {
  Object.keys(val).map(function(k){
    return val[k] = val[k]['grape_ch']
  });
  return val.join('，');
}

// 获取星期几
const getDay = (date) => {
  let dateArr=date.split('-')
  let setdate=new Date(dateArr[0],parseInt(dateArr[1]-1),dateArr[2])
  let day = "日一二三四五六".charAt(setdate.getDay())
  return `${date} ${day}`  //星期几
}

/**
 * @Author   jok
 * @DateTime 2018-01-16T18:02:48+0800
* percentKeys": {
*  "indexKey": "glancedetailUV",
*  "subKey": "clickbuyUV"
* }
*/
const getPercentData = (row, percentKeys) => {
  let percentFloat = row[percentKeys.subKey]/row[percentKeys.indexKey]*100;
  return ` / ${percentFloat.toFixed(1)}%`
}


const getOnlyPercentData = (row, percentKeys) => {
  let percentFloat = row[percentKeys.subKey]/row[percentKeys.indexKey]*100;
  return `${percentFloat.toFixed(1)}%`
}

export{tofix, formatTime, arrJoin, getDay, getPercentData, getOnlyPercentData}

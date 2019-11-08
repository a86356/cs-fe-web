export function changeIviewDate(dateA) {
  var dateee = new Date(dateA).toJSON();
  var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  return date;
}


//Mon Nov 04 2019 00:00:00 GMT+0800 (中国标准时间)   转10位时间戳
export function cn3_to_10(v) {

  return new Date(changeIviewDate(v)).getTime() / 1000;
}

export function testTime(v) {
  return v.toString().indexOf('中国标准时间') > -1;
  //console.log(v);
  //console.log(v.search("中国标准时间"));
}

function getLocalTime(nS) {
  //将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式
  // d.cTime = 1539083829787
  let date = new Date(nS);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  date = year + '-' + month + '-' + day;
  // console.log(date); // 2018-10-09
  return date;
}

export function cntoymd(d) {
  let _13 = new Date(d).getTime();

  var date = new Date(_13);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  date = year + '-' + month + '-' + day;
  return date;
}
export function _10tocn(d) {

  var now = new Date(d * 1000);

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  return year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second;
}

export function _13toymdhis(t) {
  var date = new Date(t);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  date = year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s;
  return date;
}

// 把秒转时分秒
export function changes2hms(video_length) {
  var middle= 0;// 分
  var hour= 0;// 小时
  let theTime = parseInt(video_length);
  if(theTime > 60) {
    middle= parseInt(theTime/60);
    theTime = parseInt(theTime%60);
    if(middle> 60) {
      hour= parseInt(middle/60);
      middle= parseInt(middle%60);
    }
  }
  var result = ""+parseInt(theTime)+"秒";
  if(middle > 0) {
    result = ""+parseInt(middle)+"分"+result;
  }
  if(hour> 0) {
    result = ""+parseInt(hour)+"小时"+result;
  }
  return result
}

export function getymd(seprate) {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();

  return year+seprate+month+seprate+strDate;
}

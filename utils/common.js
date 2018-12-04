/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
*使用方法
生成3-32位随机串：randomWord(true, 3, 32)
生成43位随机串：randomWord(false, 43)
*/

import {Modal} from 'antd-mobile';
import {storage,quickapp} from '@utils'
import {GOODS_DATA} from '@config'

export const randomWord = (randomFlag, min, max)=>{
    var str = "",
        range = min,
        pos,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

// 检测手机型号
export const checkPhone = ()=>{
  const MobileDetect = require('mobile-detect')
  let device_type = navigator.userAgent;//获取userAgent信息
  let md = new MobileDetect(device_type);//初始化mobile-detect
  let os = md.os();//获取系统
  let model = "";

  //判断数组中是否包含某字符串
  Array.prototype.contains = function(needle) {
      for (i in this) {
          if (this[i].indexOf(needle) > 0)
              return i;
      }
      return -1;
  }

  if (os == "iOS") {//ios系统的处理
      os = md.os() + md.version("iPhone");
      model = md.mobile();
  } else if (os == "AndroidOS") {//Android系统的处理
      os = md.os() + md.version("Android");
      var sss = device_type.split(";");
      var i = sss.contains("Build/");
      if (i > -1) {
          model = sss[i].substring(0, sss[i].indexOf("Build/"));
      }
    let phoneModel = model.toLocaleLowerCase()
      //判断是否是oppo
      if(phoneModel.indexOf('oppo')!==-1){
        return true
      }else if(phoneModel.indexOf('mi')!==-1){
      	return true
      }

  }
  return false
}

// H5页面中呼起快应用
export const openQuickapp = ({page,goods_id,goods_category_id,goods_name,is_deeplink})=>{
  const appRouter = (path,params={})=>quickapp.appRouter('com.application.goodsapp',`/${path}`,params)

  // 检测OPPO手机下呼起好物快应用首页
  if(!checkPhone()){
    return false
  }
  Modal.alert('提示', '请求去往好物快应用?', [
    { text: '取消', onPress: () => {
      console.log('cancel')
    } },
    { text: '确认', onPress: () => {
      if(page == 'home'){
        appRouter('Home',{is_deeplink})
      }else if(page == 'detail'){
        appRouter('Detail',{goods_id,goods_name,goods_category_id})
      }else if(page == 'search'){
        appRouter('Search')
      }
    } },
  ])
}

export const createA = (url)=>{
  let a = document.createElement('a')
  a.href = url
  a.style.display = 'none'
  //取消<a>标签原先的onclick事件,使<a>标签点击后通过href跳转(因为无法用js跳转)^-^
  a.setAttribute("onclick",'');
  a.setAttribute("target",'_blank');
  //激发标签点击事件OVER
  a.click("return false");
  a = null
}


// h5页面呼起客户端
// 检查app是否打开
// 原理：若通过url scheme 打开app成功，那么当前h5会进入后台，通过计时器会有明显延迟。利用时间来判断。
export const hasInstalledApp = (deepLink)=>{
  return new Promise((resolve,reject)=>{
      var timeout, t = 1000, hasApp = true;
      setTimeout(function () {
        if (hasApp) {
          resolve(true)
        } else {
          resolve(false)
        }
        document.body.removeChild(ifr);
      }, 2000)

      var t1 = Date.now();
      var ifr = document.createElement("iframe");
      ifr.setAttribute('src', deepLink);
      ifr.setAttribute('style', 'display:none');
      document.body.appendChild(ifr);

      timeout = setTimeout(function () {
         var t2 = Date.now();
         if (!t1 || t2 - t1 < t + 100) {
           hasApp = false;
         }
      }, t);
  })
}

// 检测是否举报、点赞数据
export const isOverReportOrLike = ({goodsId,action})=>{
  const arr = storage.get(GOODS_DATA,[])
  let goodsItem = arr.find(v=>v.goodsId==goodsId) || {}

  if(goodsItem && goodsItem.report && action ==='report' || goodsItem && goodsItem.like && action ==='like'){
    return true
  }

  if(goodsItem.goodsId == goodsId){
    if(action=='like'){
      goodsItem.like = true
    }else{
      goodsItem.report = true
    }
  }else{
    if(action=='like'){
      goodsItem.like = true
    }else{
      goodsItem.report = true
    }

    goodsItem.goodsId = goodsId
    arr.unshift(goodsItem)
  }

  storage.set(GOODS_DATA,arr)
}

export const getUrlParam = ()=>{
  return decodeURIComponent(location.search).split('"').filter(v=>v.length) || []
}

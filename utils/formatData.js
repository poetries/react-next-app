import moment from 'moment'
import {GoodsSourceMap} from '@config';

export const formatGoodsListData = v=>{
  v.inStockTime = moment(v.inStockTime * 1000).format('MM-DD')
  v.source = `来自${GoodsSourceMap[v.source]}`
  v.beginDate = String(v.beginDate).slice(4).replace(/(\d{2})(\d{2})/,'$1-$2')
  v.endDate = String(v.endDate).slice(4).replace(/(\d{2})(\d{2})/,'$1-$2')
  v.impressionCount = v.impressionCount>=10000?`${parseFloat(v.impressionCount/1000).toFixed(1)}k`:v.impressionCount
  v.likeCount = v.likeCount>=1000?`${parseFloat(v.likeCount/1000).toFixed(1)}k`:v.likeCount
  v.price = `￥${v.price}`
  v.priceByCoupon = v.priceByCoupon ? `￥${v.priceByCoupon}`:''

  if(v.sameGoodsStruct){
    v.sameGoodsStruct.sameGoods.forEach(vv=>{
      vv.source = `${GoodsSourceMap[vv.source]}同款`
      vv.price = `￥${vv.price}`
    })
  }
  return {
    ...v
  }
}


import * as ActionTypes from '@actions'
import {formatGoodsListData} from '@utils'
import {GoodsSourceMap} from '@config';
import moment from 'moment'

export default (state = {
	fetching : false,
	error 	 : false,
	data 	 : {}
}, action) => {

	if (action.type === ActionTypes.FETCH_GOODS_DETAIL_SUCCESS) {
		const {goodsDetail} = action.response
		const data = goodsDetail

		data.inStockTime = moment(data.inStockTime * 1000).format('MM-DD')
		data.source = `来自${GoodsSourceMap[data.source]}`
		data.price = `￥${data.price}`
		data.priceByCoupon = data.priceByCoupon ? `￥${data.priceByCoupon}`:''
		data.beginDate = String(data.beginDate).slice(4).replace(/(\d{2})(\d{2})/,'$1-$2')
		data.endDate = String(data.endDate).slice(4).replace(/(\d{2})(\d{2})/,'$1-$2')
		data.impressionCount = data.impressionCount>=10000?`${parseFloat(data.impressionCount/1000).toFixed(1)}k`:data.impressionCount
		data.likeCount = data.likeCount>=1000?`${parseFloat(data.likeCount/1000).toFixed(1)}k`:data.likeCount

		if(data.sameGoodsStruct){
			data.sameGoodsStruct.sameGoods.forEach(v=>{
				v.price = `￥${v.price}`
				v.source = `${GoodsSourceMap[v.source]}同款`
			})
		}

		return Object.assign({},state,{
			fetching : false,
			error 	 : false,
			data 	 : data
		})
	}else if(action.type === ActionTypes.FETCH_GOODS_DETAIL_REQUEST){
		return Object.assign({},state,{
			fetching : true,
			error 	 : false
		})
	}

	return state
}

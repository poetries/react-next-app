
import * as ActionTypes from '@actions'
import {formatGoodsListData} from '@utils'

export default (state = {
	fetching : false,
	error 	 : false,
	data 	 : []
}, action) => {

	if (action.type === ActionTypes.FETCH_TOP_GOODS_SUCCESS) {
		const {topGoods} = action.response

		return Object.assign({},state,{
			fetching : false,
			error 	 : false,
			data 	 : topGoods.list.length?topGoods.list.map(formatGoodsListData).map(vv=>{
				vv.isTop = true
				return vv
			}):[]
		})
	}else if(action.type === ActionTypes.FETCH_TOP_GOODS_REQUEST){
		return Object.assign({},state,{
			fetching : true,
			error 	 : false
		})
	}else if(action.type === ActionTypes.MERGE_GOODS){
		//合并Goods数据
		const {goods} = action

		return Object.assign({},state,{
			fetching : false,
			error 	 : false,
			data: [...state.data].concat(goods)
		})
	}else if(action.type === ActionTypes.CLEAR_TOP_GOODS){
		return Object.assign({},state,{
			data : []
		})
	}

	return state
}

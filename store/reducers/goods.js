
import * as ActionTypes from '@actions'
import {formatGoodsListData} from '@utils'

export default (state = {
	fetching : false,
	error 	 : false,
	data 	 : []
}, action) => {

	if (action.type === ActionTypes.FETCH_GOODS_SUCCESS) {
		const {goods} = action.response
		const {totalCount,pageSize} = goods.pagination

		return Object.assign({},state,{
			fetching : false,
			error 	 : false,
			totalPage: Math.ceil( parseInt(totalCount)/parseInt(pageSize) ),
			data 	 : goods.list.length?goods.list.map(formatGoodsListData):[]
		})
	}else if(action.type === ActionTypes.FETCH_GOODS_REQUEST){
		return Object.assign({},state,{
			fetching : true,
			error 	 : false
		})
	}else if(action.type === ActionTypes.CLERA_SEARCH_LIST){
		return Object.assign({},state,{
			fetching : false,
			error 	 : false,
			data 	 : []
		})
	}
	return state
}

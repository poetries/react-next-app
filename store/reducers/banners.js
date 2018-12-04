
import * as ActionTypes from '@actions'

export default (state = {
	fetching : false,
	error 	 : false,
	data 	   : []
}, action) => {

	if (action.type === ActionTypes.FETCH_BANNER_SUCCESS) {
		const {banners} = action.response

		return Object.assign({},state,{
			fetching : false,
			error 	 : false,
			data 	 : banners.list.length?banners.list.map(v=>({
				goodsId:v.goodsId,
				goodsName:v.goodsName,
				goodsCategoryId:v.goodsCategoryId,
				imgUrl:v.slideImage
			})):[]
		})
	}else if(action.type === ActionTypes.FETCH_BANNER_REQUEST){
		return Object.assign({},state,{
			fetching : true,
			error 	 : false
		})
	}
	return state
}

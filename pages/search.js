import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
	fetchGoods,
	fetchGoodsDetail,
	fetchTopGoods,
	goodsDataReport,
  clearSearchList,
	clearGoodsList
} from "@actions";
import {PAGE_SIZE,CATEGORY_TAGS,disOrderHotTag} from '@config'
import styled from 'styled-components'
import { List,Icon,SearchBar,Drawer,Popover,Tag } from 'antd-mobile';
import { IoMdSync,IoIosTrash,IoMdTime,IoIosClose} from "react-icons/io";
import {openQuickapp,storage} from '@utils'
import {
   Skeleton,
   SearchBox,
   GoodsList,
   LoadMore,
   ErrorFetch
}from '@components'

const util = require('util')

const Wrapper = styled.div`
  padding-top: 4px;
	.am-search.am-search-start .am-search-input input[type="search"] {
		padding-left: 10px;
	}
`


@connect(({goods,topGoods,goodsDetail}) => ({
  goods,
  topGoods:topGoods.data,
  goodsDetail:goodsDetail.data
}),{
  fetchGoods,
	clearSearchList,
  clearGoodsList,
	fetchGoodsDetail,
	fetchTopGoods,
	goodsDataReport
})
export default class Search extends Component {
  static async getInitialProps(ctx) {
    // err req res pathname query asPath isServer
    const { reduxStore, isServer,pathname } = ctx

    return {
      pathname
    }
  }
	state = {
		goodsList:[], // 存储列表信息
		hasMore:true, // 记录当前状态下还有没有更多的数据可供加载
		isLoadingMore:false, //记录当前状态下，是加载中，还是点击可加载更多
		page:1, //页码
	}

	constructor(props) {
		super(props)

	}
	componentDidMount() {
		// OPPO手机下呼起好物快应用搜索页
		openQuickapp({page:'search'})

		this.props.clearSearchList()
	}
	// 加载更多
	 _loadMoreData(){
		const {goods} = this.props
		const _this = this

		_this.setState({
			isLoadingMore:true
		})

		if(_this.state.hasMore){
			_this.setState({page:++_this.state.page})// 页码累加

			_this.props.fetchGoods({..._this.state.params,page:_this.state.page}).then(res=>{

				const data = res.goods.list
				let dataList = _this.state.goodsList

				if(!dataList.length){
					dataList = goods.data
				}

				if(data && data.length < PAGE_SIZE) {
					_this.setState({
						hasMore:false,
						goodsList:dataList.concat(data)
					})
				}else{
					_this.setState({
						goodsList:dataList.concat(data),
						hasMore:true,
						isLoadingMore:false
					})
				}

			})

		}else{
			this.setState({
				isLoadingMore:false
			})
		}


	}

	render() {
		const {goods,err,pathname} = this.props
		const data  = this.state.goodsList.length>0 ? this.state.goodsList : goods && goods.data

    if (err) {
      return <ErrorFetch err={err} />
    }
	return (<Wrapper>
		<SearchBox
			path={pathname}
			tags={CATEGORY_TAGS}
			isLoading={goods.fetching}
			hasnoGoods={data.length==0}
			onBlur={()=>this.props.clearSearchList()}
			onChange={params=>{
				params.page = this.state.page
				this.setState({params})
				this.props.fetchGoods(params)
			}}
      {...this.props}
		/>

	 {/* 搜索列表 */}
	<GoodsList
		pathname={pathname}
		goodsList={data || []}
		dataReport={this.props.goodsDataReport}
	/>
	{data.length>=PAGE_SIZE && <LoadMore isLoadingMore={this.state.isLoadingMore} hasMore={this.state.hasMore} loadMoreFn={this._loadMoreData.bind(this)} />}

	</Wrapper>)
	}
}

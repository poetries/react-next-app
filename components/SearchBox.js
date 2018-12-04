import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { List,Icon,SearchBar,Drawer,Popover,Menu,ActivityIndicator,Toast } from 'antd-mobile';
import styled from 'styled-components'
import { IoIosMenu } from "react-icons/io"
import {disOrderHotTag,tabs,CATEGORY_TAGS} from '@config'
import { IoMdSync,IoIosTrash,IoMdTime,IoIosClose} from "react-icons/io";
import {saveSearch,deleteSearch,clearSearch,loadSearch,storage,getUrlParam} from '@utils'
import _ from 'lodash'
import Router from 'next/router'
import {GoodsTab} from '@components'
import {Nocontent} from './styles/no-content'

const Item = List.Item;
const Brief = Item.Brief;

const HOT_TAGS = disOrderHotTag()

const HeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 50px;
	background-color: #fff;
	border-bottom: 0px solid #f5f5f9;
	background-color: white;
	justify-content: space-around;
	align-items: center;

	.logo-img{
		height: 28px;
    width: 74px;
	}
  > .bar-wrapper {
    width:60%;
  }
  .bar-wrapper > div{
    margin-right:10px
  }
  > .icon-menu {
    font-size:36px;
    margin-top:10px;
		margin-left: 5px;
    color:#bdb9b9;
  }
	.search-bar {
		background-color:#fff;
		border-radius:5px;
		margin-left:10px;
		margin-top:10px;
		height:40px
	}
	.am-search-input{
		border-radius: 20px;
	}
`

const HotSearchWrapper = styled.div`
		.title {
			font-size: 14px;
		}
		.history .am-list-brief,.hot-search .am-list-brief{
			font-size: 12px;
		}
		.history.am-list {
 		  margin-top: 5px;
 		}
	 .refresh-text {
		 color: #c1b7b3;
		 font-size: 12px;
	 }
	 .refresh-icon {
	   font-size: 18px;
		 position: relative;
		 top: 5px;
		 color: #d9cfcb;
	 }
	 .refresh-icon.huanyipi{
		 transition:all .2s ease-in;
		 transform:rotate(0deg);
		 transform-origin:center center;
	 }
	 .hot-tags {
		 padding:2px;
     display:inline-flex;
     flex-direction:row;
     flex-wrap:wrap;
		 justify-content: flex-start;
	 }
	 .tag-item {
     border-radius:5px;
     padding:4px;
     border: 1px solid #dddddd;
     margin-right:2px;
		 font-size: 12px;
		 color: #b4afaf;
	 }
	 .history-icon {
		 padding-right: 3px;
	 }
	 .close-icon {
		 font-size: 25px;
		 position: relative;
		 left: 3px;
		 top: 5px;
		 color: #ddd;
	 }
`

const SearchWrapper = styled.div`
	position: fixed;
	z-index: 2;
	top: -10px;
	width:100%;

	.single-foo-menu {
	  position: absolute;
	  z-index: 90 !important;
	  width: 100%;
	}

	.single-menu-active .single-top-nav-bar{
	  z-index: 90;
	}

	.single-top-nav-bar {
	  position: relative;
	  background-color: #008AE6;
	  color: #FFF;
	}
	.am-navbar-title {
	  color: #FFF!important;
	}
	.menu-mask {
	  position: absolute;
	  top: 0;
	  width: 100%;
	  height: 100%;
	  background-color: #000;
	  opacity: 0.4;
	  z-index: 89;
	}
	.single-foo-menu .am-list-item{
	  border-bottom: 1px dashed #ece7e7 !important;
	}
	.am-menu .am-flexbox .am-flexbox-item:only-child .am-list .am-list-item:last-child{
		padding-bottom: 120px;
	}
`

class SearchBox extends Component {

	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleHotTagAndHistory = this.handleHotTagAndHistory.bind(this)
		this.handleHistory = this.handleHistory.bind(this)
		this.refreshText = this.refreshText.bind(this)
	}
  state = {
		visible: false,
		changeFlag:false,
		historyTag:[],
		searchValue:'',
		hotTags:HOT_TAGS,
		initData: '',
    show: false
	}

	componentDidMount() {
		const categoryParam = getUrlParam()
		const isSearchPage = this.props.path.indexOf('search')!==-1
		this.autoFocusInst.focus();

		// 从首页点击类目跳转过来 查询类目
		if(isSearchPage && categoryParam.length){
      let category_name = categoryParam[3]
      let category_id = categoryParam[6].replace(':','').replace('}','')

			saveSearch(category_name)
			this.props.onChange({goodsCategoryId:category_id})
		}

		//加载历史记录
		isSearchPage && this.setState({historyTag:loadSearch()})
	}
	handleChange(val){

		this.setState({
			searchValue: val,
			changeFlag:true
		});


		this.handleSubmit(val)
	}
	handleSubmit(val,obj={}){
		if (!val) {
			return this.props.onBlur() // 清空搜索列表数据
		};

		saveSearch(val)
		this.setState({historyTag:loadSearch()})

		// 查询类目
		if(obj.action && obj.action == 'querryCategory'){
			return this.props.onChange({goodsCategoryId:obj.categoryId})
		}
		// 查询商品关键词
		this.props.onChange({searchKeyword:val})
	}
	handleHotTagAndHistory(v){
		this.setState({searchValue:v})
		this.handleSubmit(v)
	}
	handleHistory(obj){
		if(obj.action=='deleteItem'){
			 deleteSearch(obj.value)
		}else if(obj.action=='deleteAll'){
			clearSearch()
		}

		// 更新状态
		this.setState({historyTag:loadSearch()})
	}
  onMaskClick = () => {
    this.setState({
      show: false
    });
  }
  popupMenu = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: CATEGORY_TAGS,
        });
      }, 500);
    }
  }
	// 类目选择
  onSelectCategory({categoryName,categoryId}){
		const isSearchPage = this.props.path.indexOf('search')!==-1
		const value = {category_name:categoryName,category_id:categoryId}

		// find tabIndex
		const tabIndex = tabs.findIndex(v=>v.categoryId == categoryId)
		storage.set('__queryCategory__',{categoryId,tabIndex:tabIndex===-1?'':tabIndex})

		this.setState({searchValue:categoryName,visible: false})

		// 从首页跳转过来参数处理
		if(!isSearchPage){
      Toast.loading('正在搜索中,请稍等...',1)
		}else{
			this.handleSubmit(categoryName,{action:'querryCategory',categoryId})
		}

    Router.push({pathname:'/search',query:{category:JSON.stringify(value)}})
	}
  onMenuChange = (value) => {
		this.setState({
      show: false
    });
    let label = '';
		let categoryId = value[0]
    CATEGORY_TAGS.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    })

		this.onSelectCategory({categoryName:label,categoryId})
  }
	refreshText(refreshIcon){
		let rotateAngle = refreshIcon.style.transform.replace(/[^0-9]/ig,'')

		if(rotateAngle){
			rotateAngle = parseInt(rotateAngle,10)
		}else{
			rotateAngle = 0
		}
		refreshIcon.style.transform = `rotate(${(rotateAngle+360)}deg)`
		this.setState({hotTags:disOrderHotTag()})
	}

	render() {
		const {path,hasnoGoods,isLoading,history,clearSearchList,fetchTopGoods,clearGoodsList,tags} = this.props
    const {searchValue,changeFlag,hotTags,historyTag,initData, show} = this.state
    const categoryParam = typeof window !=='undefined' ? getUrlParam() :''
    const categoryName = categoryParam.length ? categoryParam[3] : ''
		const isSearchPage = path.indexOf('search')!==-1
		const isDetailPage = path.indexOf('detail')!==-1
		const searchKeyword = searchValue || !changeFlag && categoryName || ''
    const menuH = typeof document !=='undefined'? document.documentElement.clientHeight:''


    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onMenuChange}
        height={menuH}
      />
    )

		const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: menuH * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    )

		return (
			<SearchWrapper>
			 <HeaderWrapper>
				  <div>
						<img className="logo-img" src="https://cdn.yesdat.com/BAAAAAAAAJ8Bb4lSIC1RrF9zn.png" alt="好物"/>
					</div>
					<div className="bar-wrapper">
            <div onClick={e=>!isSearchPage && Router.push('/search')}>
							<SearchBar
								onChange={val=>this.handleChange(val)}
								onBlur={()=>!searchKeyword && this.props.onBlur()}
								value={searchKeyword}
								onCancel={()=>{
									if(isSearchPage) {
										fetchTopGoods()

										storage.set('__queryCategory__',{categoryId:'',tabIndex:'0'})
										Router.push('/')
									}
								}}
								ref={ref => this.autoFocusInst = ref}
								disabled={isSearchPage?false:true}
								placeholder="搜索商品/标签"
								maxLength={8}
								className="search-bar"
							/>
						</div>
		  	  </div>
					<IoIosMenu className="icon-menu" onClick={this.popupMenu}/>
					</HeaderWrapper>

					<div className={show ? 'single-menu-active' : ''}>
 					 {show ? initData ? menuEl : loadingEl : null}
 					 {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
 				  </div>

					{isSearchPage && !searchKeyword && <HotSearchWrapper>
						<List className="hot-search">
							<Item extra={<span ref={icon=>this.refreshIcon=icon} className="refresh-text" onClick={()=>this.refreshText(this.refreshIcon.children[0])}>换一批 <IoMdSync className="refresh-icon huanyipi"/></span>}><Brief className="title">热门搜索</Brief></Item>
						  <Item wrap>
								{hotTags.map(v=><div className="hot-tags" key={v} onClick={()=>this.handleHotTagAndHistory(v)}><span className="tag-item">{v}</span></div>)}
							</Item>
						</List>
						{historyTag && historyTag.length>0 && <List className="history">
							<Item extra={<IoIosTrash className="refresh-icon" onClick={()=>this.handleHistory({action:'deleteAll'})} />}><Brief className="title">历史搜索</Brief></Item>
						{historyTag.map(v=><Item wrap extra={<IoIosClose className="close-icon" onClick={()=>this.handleHistory({action:'deleteItem',value:v})}/>} key={v}><div onClick={()=>this.handleHotTagAndHistory(v)}><Brief><IoMdTime className="history-icon"/>{v}</Brief></div></Item>)}
					</List>}
					</HotSearchWrapper>}

					{searchKeyword && hasnoGoods && !isLoading && <Nocontent><div className="no-data-wrapper">
						<img src="https://cdn.yesdat.com/BAAAAAAAAAABb4kHVDwt3MTGu.png" className="img"/>
					  <span className="no-data__text">这里什么都没有，去看看别的</span>
				</div></Nocontent>}
				 {!isSearchPage && <GoodsTab {...this.props}/>}


			 </SearchWrapper>
		 )
	}
}

SearchBox.propTypes = {
	path:PropTypes.string.isRequired,
	isLoading:PropTypes.bool,
	hasnoGoods:PropTypes.bool,
	clearSearchList:PropTypes.func,
	tags:PropTypes.array
}

export default SearchBox

import React,{Component,PureComponent} from 'react';
import { Tabs, WhiteSpace, Badge,Toast } from 'antd-mobile';
import {tabs} from '@config'
import styled from 'styled-components'
import {storage} from '@utils'
import Router from 'next/router'

export default class GoodsTab extends PureComponent {
  constructor(props) {
		super(props)
	}
  state={

  }
  render(){
    const {fetchGoods,clearGoodsList,clearSearchList,categoryId,isServer,fetchTopGoods,path,asPath,tabIndex,location,onTabChange} = this.props
    const isDetail = path.indexOf('detail')!==-1
    const queryCategory = storage.get('__queryCategory__')
    const clientTabIdx = queryCategory && queryCategory.tabIndex || 0
    const currTab = tabIndex == clientTabIdx?tabIndex:clientTabIdx //客户端和服务端对比
    const findIdx = tabs.findIndex(v=>v.categoryId == categoryId)
    const tabIdx = findIdx!==-1 ? findIdx : 0
    const initialTab = isDetail?tabIdx:currTab // 详情页和首页对比

    return (
      <Tabs tabs={tabs.map(v=>{
          if(v.categoryId=='18'){
            v.title = <Badge text="热">爆款榜单</Badge>
          }
          return {...v}
        })}
        tabBarActiveTextColor="#f00"
        tabBarUnderlineStyle={{border:'1px #f60016 solid'}}
        initialPage={initialTab}
        onTabClick={(tab, index) => {
          storage.set('__queryCategory__',{
            categoryId:tab.categoryId,
            tabIndex:index
          })
          storage.set('fromDetailTriggle',isDetail?true:false)

          Toast.loading('加载中,请稍后...',1.5)

          onTabChange && onTabChange(tab)

          if(!tab.categoryId){
            fetchTopGoods()
          }else{
            fetchGoods({goodsCategoryId:tab.categoryId})
          }
          Router.push(`/?categoryId=${tab.categoryId}&tabIndex=${index}`)
        }}

      >
      </Tabs>
    )
  }
}

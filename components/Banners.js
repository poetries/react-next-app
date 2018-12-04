import React,{Component,PureComponent} from 'react';
import styled from 'styled-components'
import {storage} from '@utils'
import { MdStarHalf,MdLabel,MdPhoto } from "react-icons/md";
import { Carousel,Flex, WingBlank,List,WhiteSpace,Modal,Button,ActionSheet,Toast } from 'antd-mobile';
import Router from 'next/router'

const BannerWrapper = styled.div`
  .img-background {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fbfafa0a;
    color:#e4dada;
  }
  .img-icon{
    font-size:50px;
  }
`

export default class Banners extends PureComponent {
  constructor(props) {
		super(props)
	}
  state={

  }
  componentDidMount() {
    const imgLoading = this.refs.imgLoading
    imgLoading && (imgLoading.style.display='none')
  }
  render(){
    const {data,height,pathname} = this.props
    const isDetail = pathname.indexOf('detail')!==-1
    return (
      <BannerWrapper>
      {data && data.length?[<Carousel
        key="carousels"
        autoplay={true}
        autoplayInterval={2000}
        swipeSpeed={12}
        infinite
      >
        {data.map(v => (
          <div
            onClick={()=>{
              storage.set('__DetailGoodsName__',v.goodsName)
   					  storage.set('__goodsCategoryId__',v.goodsCategoryId)

              !isDetail && Router.push(`/detail/${v.goodsId}`)
            }}
            key={`${v}_${Math.random()}`}
            style={{ display: 'inline-block', width: '100%', height }}
          >
            <img
              src={v.imgUrl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top',height }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
        </div>
        ))}
      </Carousel>,
      <div className="img-background" key="imgpic" ref="imgLoading" style={{height}}>
        <MdPhoto className="img-icon"/>
        <span>加载中...</span>
      </div>
      ]
      :null}
    </BannerWrapper>
    )
  }

}

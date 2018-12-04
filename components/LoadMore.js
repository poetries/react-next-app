import React,{PureComponent} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const LoadMoreWrapper = styled.div`
  border-top: 1px dashed #ddd;
  .load-more{
    text-align: center;
    padding: 10px 0;
    background-color: #fff;
    color: #999;
  }
`
class LoadMore extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    _loadMoreHandle(){
        // 执行传递过来的loadMoreData
        this.props.loadMoreFn()
    }
    render() {
        const {hasMore} = this.props

        return (
            <LoadMoreWrapper>
              <div className="load-more" ref='wrapper'>
                 {
                     this.props.isLoadingMore && hasMore
                     ? <span className="loading">加载中...</span>
                     : (hasMore?<span onClick={this._loadMoreHandle.bind(this)}>加载更多</span>:<span>没有更多了</span>)
                 }
              </div>
            </LoadMoreWrapper>
        )
    }
    componentDidMount(){
        const wrapper = this.refs.wrapper;
        const {hasMore} = this.props

        let timeoutId;
        window.addEventListener('scroll',()=>{
            if (this.props.isLoadingMore) return;
            if(timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(()=>{
                // 获取加载更多这个节点距离顶部的距离
                const top = wrapper.getBoundingClientRect().top;
                const windowHeight = window.screen.height;

                if (hasMore && top && top < windowHeight) {
                    // 当wrapper已经在页面可视范围之内触发
                    this.props.loadMoreFn();
                }
            },50)
        },false)
    }
}

LoadMore.propTypes = {
  isLoadingMore:PropTypes.bool.isRequired,
  hasMore:PropTypes.bool.isRequired,
  loadMoreFn:PropTypes.func.isRequired
}

export default LoadMore

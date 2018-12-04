import React,{PureComponent} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
    .skeleton {
      display: flex;
      padding: 10px;
      width: 380px;
    }

    .skeleton .skeleton-head,
    .skeleton .skeleton-title,
    .skeleton .skeleton-content {
        background: rgba(220, 228, 232, 0.41);
    }
    .skeleton .skeleton-head{
      padding:20px;
      margin-right:10px;
    }

    .skeleton-body {
        width: 100%;
    }

    .skeleton-title {
        width: 100%;
        height: 15px;
        transform-origin: left;
        animation: skeleton-stretch .5s linear infinite alternate;
        border-radius: 5px;
    }

    .skeleton-content {
        width: 100%;
        height: 15px;
        margin-top: 10px;
        transform-origin: left;
        animation: skeleton-stretch .5s -.3s linear infinite alternate;
        border-radius: 5px;
    }

    @keyframes skeleton-stretch {
        from {
            transform: scalex(1);
        }
        to {
            transform: scalex(.3);
        }
    }

`
export default class Skeleton extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {count} = this.props
        const arr = []
        if(count){
          for(let i=0;i<count;i++){
            arr.push({})
          }
        }
        return (
            <Wrapper>
              {arr.map(v=><div className="skeleton" key={Math.random()}>
                <div className="skeleton-head"></div>
                <div className="skeleton-body">
                   <div className="skeleton-title"></div>
                   <div className="skeleton-content"></div>
                </div>
              </div>)}
            </Wrapper>
        )
    }
}

Skeleton.propTypes = {
  count:PropTypes.number.isRequired
}

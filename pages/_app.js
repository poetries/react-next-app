import 'babel-polyfill'
import App, {Container} from 'next/app'
import React,{Fragment} from 'react'
import {withRouter} from 'next/router'
import Head from 'next/head'
import storeConfig from '@storeConfig'
import {Provider} from 'react-redux'
import { PageTransition } from 'next-page-transitions'
import Router from 'next/router'
import NProgress from 'nprogress'
import {Loader} from '@components'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

@storeConfig
@withRouter
export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  constructor() {
    super()

  }

  componentDidMount() {

  }

  render() {
    Router.onRouteChangeStart = (url) => {
      NProgress.start()
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()

    const {Component, pageProps, reduxStore, router: {pathname}} = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
					<Fragment>
						<Head>
							<title>好物为您聚集大平台的优惠商品，让你更便捷的找到你想要的宝物</title>
						</Head>
						<Component {...pageProps}  />
					</Fragment>
        </Provider>
        <style jsx global>{`

        `}</style>
      </Container>
    )
  }
}

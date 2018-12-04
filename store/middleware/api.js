import {normalize, schema} from 'normalizr'
import {camelizeKeys, decamelizeKeys} from 'humps'
import {MSG_SHOW, MSG_INIT,COMMON_FETCHING,COMMON_OVER} from '@actions'
import axios from 'axios'
import {config} from '@config'
import {randomWord} from '@utils'
import {Toast} from 'antd-mobile'
import md5 from 'md5'
import 'isomorphic-unfetch'

// 生成签名
const KEY = 'faffa2fa' //后台约定的key
const nonce_str = randomWord(false,32)
const timestamp = Date.now()
const stringA = `nonce_str=${nonce_str}&timestamp=${timestamp}`
const sign = md5(`${stringA}&key=${KEY}`).toUpperCase()
const TOKEN = `timestamp=${timestamp}&nonce_str=${nonce_str}&sign=${sign}`

const API_ROOT =  'http://'+config.apiDomain

const callApi = (endpoint, schema, query = null, isDownload = false) => {
    let fullUrl = endpoint
    const {method = 'get', data , headers = {},withCredentials=true} = query || {}

    if (method.toLowerCase() === 'get') {
        const q = decamelizeKeys(data||{})
        if (q && q.query_optional) {
            Object.keys(q.query_optional).forEach(v => {
                q.query_optional[v] = JSON.parse(q.query_optional[v])
            })

        }
        const ps = Object.keys(q).map(v => {
            if(v && q[v])
                return `${v}=${q[v]}`
            else
                return ''
        }).filter(v => v && v.length)
        if (fullUrl.indexOf('?') === -1) {
            fullUrl += '?'
        } else {
            fullUrl += '&'
        }
        fullUrl +=  '&current_page=' + q.current_page + '&page_size=' + q.page_size +'&q=' + encodeURIComponent(JSON.stringify(q))
    }

    if (isDownload) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', API_ROOT + fullUrl)
        xhr.setRequestHeader('Accept', 'application/octet-stream')
        xhr.responseType = 'blob'
        xhr.send(null)

        xhr.onload = function (e) {
            if (this.status === 200 && this.readyState === 4) {
                let blob = new Blob([this.response], {type:'application/octet-stream'})
                let a = document.createElement('a')
                a.style="display:none"
                document.body.appendChild(a)

                let url = window.URL.createObjectURL(blob)
                let filename = this.getResponseHeader('content-disposition').split(' ')[1].split('=')[1].replace(/\"/g, '')
                a.href = url
                a.download = filename
                a.click()
                window.URL.revokeObjectURL(url)
                document.body.removeChild(a)
            }
        }

        return false
    } else {
        const config = {
            method,
            withCredentials,
            baseURL: API_ROOT,
            url: fullUrl,
            data,
            transformRequest: [
                data => {
                    if (data && (data.toString() !== '[object FormData]')) {
                        return JSON.stringify(decamelizeKeys(data))
                    }
                    return data
                }
            ],
            headers:{

            }
        }

        method.toLowerCase() === 'post' && (delete config.headers)

        return axios(config).then(
            res => {
                if(res.status === 204){
                    return {}
                }
                const json = camelizeKeys(res.data)

                if (json.code !== 0) {
                    return Promise.reject({data: json})
                }
                const camelizedJson = camelizeKeys(json.data)
                if (typeof schema === 'object') {
                    return Object.assign({},
                        normalize(camelizedJson, schema)
                    )
                } else if (typeof schema === 'string') {
                    return Object.assign({}, {
                        [schema]: camelizedJson
                    }, {})
                }
                return json

            },
            error => {
                return Promise.reject(camelizeKeys(error.response))
            }
        )
    }
}


export const CALL_API = 'Call API'

export default store => next => action => {
    const callAPI = action[CALL_API]
    const {popUpMsgWhenSuccess} = action
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let {endpoint} = callAPI
    const {schema, types, query} = callAPI
    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }
    if (!schema) {
        throw new Error('Specify one of the exported Schemas.')
    }
    // if (!Array.isArray(types) || types.length !== 3) {
    if (!Array.isArray(types)) {
        throw new Error('Expected an array of action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }
    if (endpoint.indexOf('?') !== -1) {
        endpoint += '&'
    } else {
        endpoint += '?'
    }
    endpoint += TOKEN

    if (types.length === 1) {
        const isDownload = true
        return callApi(endpoint, schema, query, isDownload)
    }

    const [requestType, successType, failureType] = types
    next(actionWith({type: requestType}))
    next({type:COMMON_FETCHING})

    return callApi(endpoint, schema, query).then(
        response => {
            if (popUpMsgWhenSuccess) {
                next({
                    type: MSG_SHOW,
                    msg: popUpMsgWhenSuccess,
                    showType : 'success'
                })

                setTimeout(() => {
                    next({
                        type : MSG_INIT
                    })
                },350)
            }
            next(actionWith({
                response,
                type: successType
            }))
            setTimeout(()=>{
                next({
                    type : COMMON_OVER
                })
            },1500)

            return response
        },
        error => {
            const {code,message, status} = (error||{}).data||{}
            const errMsg = message || '服务异常'

            if (status === 401) {

            }
            Toast.offline(errMsg,2)

            next({
                type: MSG_SHOW,
                msg: errMsg,
                showType: 'error'
            })
            next(actionWith({
                type: failureType,
                response: error
            }))
            setTimeout(() => {
                next({
                    type : MSG_INIT
                })
                next({
                    type : COMMON_OVER
                })
            },1500)

            return error
        }
    )
}

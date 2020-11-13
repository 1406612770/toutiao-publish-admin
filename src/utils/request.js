/**
 *基于axios封装的请求模块
 */
import axioxs from 'axios'
const request = axioxs.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
export default request

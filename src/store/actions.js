import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVINDEX,
  RECEIVE_NAVDETAIL,
  LoginWay
} from './mutations-type'

import {
  reqHomeData,
  reqTopciData,
  reqNavData
} from "../api"


export default {
  //获取首页数据
  async getHomeData({commit}, callback) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      callback && callback()
    }
  },
//  获取识物页数据
  async getTopicData({commit}) {
    const result = await reqTopciData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
    }
  },
  //  获取列表页数据
  async getNavData({commit}) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },
//修改获取的下标
  setNavIndex({commit},index){
    commit(RECEIVE_NAVINDEX, index)
  },
  //获取对应下标的信息
  getNavDetail({commit},callback){
    commit(RECEIVE_NAVDETAIL)
    callback && callback()
  },

  //设置loginWay
  setLoginWay({commit},loginWay){
    commit(LoginWay,loginWay)
  }





}

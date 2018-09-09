/*
直接更新state的多个方法的对象
 */

import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutations-type'

export default {
  //获取首页数据
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
  //获取识物数据
  [RECEIVE_TOPICDATA] (state, {topicData}) {
    state.topicData = topicData
  },
  //获取分类数据
  [RECEIVE_NAVDATA] (state, {navData}) {
    state.navData = navData
  },


}

/*
直接更新state的多个方法的对象
 */

import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  RECEIVE_NAVINDEX,
  RECEIVE_NAVDETAIL
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
  //获取修改的下标
  [RECEIVE_NAVINDEX] (state, {index}) {
    state.NavIndex = index
  },
  //获取分页的数据
  [RECEIVE_NAVDETAIL] (state) {
    state.NavDetail =state.navData[state.NavIndex]
  },

}

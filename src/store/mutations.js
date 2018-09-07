/*
直接更新state的多个方法的对象
 */

import {
  RECEIVE_HOMEDATA,
} from './mutations-type'

export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
}

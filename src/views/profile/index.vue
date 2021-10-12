<template>
  <div class="m-profile">
    <navbar background-color="#ff8198">个人信息</navbar>

    <user-info />

    <count-info />

    <option-list :data="orderList" />

    <option-list :data="serveList" />
  </div>
</template>

<script>
import Navbar from 'components/Navbar'

import UserInfo from './components/UserInfo'
import CountInfo from './components/CountInfo'
import OptionList from './components/OptionList'

export default {
  name: 'Profile',
  components: {
    Navbar,
    UserInfo,
    CountInfo,
    OptionList,
  },
  data() {
    return {
      orderList: [
        {
          title: '我的消息',
          iconClass: 'icon-msg',
        },
        {
          title: '积分商城',
          iconClass: 'icon-pointer',
        },
        {
          title: '会员卡',
          iconClass: 'icon-vip',
        },
      ],
      serveList: [
        {
          title: '我的购物车',
          iconClass: 'icon-icart',
        },
        {
          title: '下载购物APP',
          iconClass: 'icon-shop',
        },
      ],
    }
  },
}
</script>

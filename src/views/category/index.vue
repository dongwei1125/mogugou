<template>
  <div class="m-category">
    <navbar background-color="#ff8198">商品分类</navbar>
    <cates-list :data="cates" />
  </div>
</template>

<script>
import Navbar from 'components/Navbar'

import CatesList from './components/CatesList'

import { getCate } from 'api/category'

export default {
  name: 'Category',
  components: {
    Navbar,
    CatesList,
  },
  data() {
    return {
      cates: [],
    }
  },
  created() {
    this.getCate()
  },
  methods: {
    getCate() {
      getCate()
        .then(res => {
          this.cates = res.content
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

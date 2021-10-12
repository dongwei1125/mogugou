const express = require('express')
const router = express.Router()
const db = require('./db')
const { getDiffRandom } = require('./utils')
const { SUCCESS_CODE } = require('./const')

router.get('/api/getBann', (req, res) => {
  res.json({
    code: SUCCESS_CODE,
    content: db.banner,
    msg: 'success',
  })
})

router.get('/api/getRecom', (req, res) => {
  res.json({
    code: SUCCESS_CODE,
    content: db.recommend,
    msg: 'success',
  })
})

router.get('/api/getFeat', (req, res) => {
  res.json({
    code: SUCCESS_CODE,
    content: db.feature,
    msg: 'success',
  })
})

router.get('/api/getCate', (req, res) => {
  res.json({
    code: SUCCESS_CODE,
    content: db.category,
    msg: 'success',
  })
})

router.get('/api/getList', (req, res) => {
  const { type, pageNum, pageSize } = req.query
  const data = db.list.filter(e => e.type === type)

  res.json({
    code: SUCCESS_CODE,
    content: data.slice((pageNum - 1) * pageSize, pageNum * pageSize),
    msg: 'success',
  })
})

router.get('/api/getDetail', (req, res) => {
  const randoms = getDiffRandom(db.list.length)

  res.json({
    code: SUCCESS_CODE,
    content: {
      ...db.list.find(el => el.id == req.query.id),
      recommend: randoms.map(el => db.list[el]),
    },
    msg: 'success',
  })
})

module.exports = router

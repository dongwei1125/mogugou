import db from './db'
import { SUCCESS_CODE } from './const'
import { getDiffRandom } from './utils'

export function getBann() {
  return new Promise((resolve, reject) => {
    resolve({
      code: SUCCESS_CODE,
      content: db.banner,
      msg: 'success',
    })
  })
}

export function getRecom() {
  return new Promise((resolve, reject) => {
    resolve({
      code: SUCCESS_CODE,
      content: db.recommend,
      msg: 'success',
    })
  })
}

export function getFeat() {
  return new Promise((resolve, reject) => {
    resolve({
      code: SUCCESS_CODE,
      content: db.feature,
      msg: 'success',
    })
  })
}

export function getList(params) {
  const { type, pageNum, pageSize } = params
  const data = db.list.filter(e => e.type === type)

  return new Promise((resolve, reject) => {
    resolve({
      code: SUCCESS_CODE,
      content: data.slice((pageNum - 1) * pageSize, pageNum * pageSize),
      msg: 'success',
    })
  })
}

export function getDetail(id) {
  const randoms = getDiffRandom(db.list.length)

  return new Promise((resolve, reject) => {
    resolve({
      code: SUCCESS_CODE,
      content: {
        ...db.list.find(el => el.id == id),
        recommend: randoms.map(el => db.list[el]),
      },
      msg: 'success',
    })
  })
}

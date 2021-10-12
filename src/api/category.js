import db from './db'
import { SUCCESS_CODE } from './const'

export function getCate() {
  return new Promise((resolve, reject) => {
    resolve({
      code: SUCCESS_CODE,
      content: db.category,
      msg: 'success',
    })
  })
}

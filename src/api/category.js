import request from 'utils/request'

export function getCate() {
  return request({
    url: '/api/getCate',
    method: 'get',
  })
}

import request from 'utils/request'

export function getBann() {
  return request({
    url: '/api/getBann',
    method: 'get',
  })
}

export function getRecom() {
  return request({
    url: '/api/getRecom',
    method: 'get',
  })
}

export function getFeat() {
  return request({
    url: '/api/getFeat',
    method: 'get',
  })
}

export function getList(params) {
  return request({
    params,
    url: '/api/getList',
    method: 'get',
  })
}

export function getDetail(id) {
  return request({
    params: {
      id,
    },
    url: '/api/getDetail',
    method: 'get',
  })
}

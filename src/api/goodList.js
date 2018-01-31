import request from 'globalFunctions/request'

export function getGoodList(query) {
  return request({
    // url: '/good/list',
    url: `/good/list?random=${Math.random(1000)}`,
    method: 'get',
    params: query
  })
}


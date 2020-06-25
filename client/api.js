import request from 'superagent'

const dataUrl = 'http://localhost:3000/api/v1'

export function getData () {
  return request
    .get(dataUrl)
    .then(response => {
      // console.log('client-side: ', response.body)
      return response.body
    })
}

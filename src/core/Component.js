export default class Component {
  constructor() {
    this.el = document.createElement('div')
    this.render()
  }
  render() {}
}

function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, '', '/#/')
  }
  const containerView = document.querySelector('container')
  const [hash, queryString = ''] = location.hash.split('?') //물음표를 기준으로 해시 정보와 쿼리스트링을 구분

  const query = queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})

  history.replaceState(query, '') // (상태, 제목)

  const currentRoute = routes.find(route =>
    new RegExp(`${route.path}/?$`).test(hash)
  )
  if (containerView) {
    containerView.innerHTML = ''
    currentRoute && containerView.append(new currentRoute.element().el)
  }
  window.scrollTo(0, 0)
}

export function createRouter(routes) {
  // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}

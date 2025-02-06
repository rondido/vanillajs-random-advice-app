import Component from '../core/Component'

export default class Home extends Component {
  constructor() {
    super()
    this.storage = {}
  }
  async fetchApi() {
    const ADVICE_URL = 'https://api.adviceslip.com/advice'
    try {
      const response = await fetch(ADVICE_URL)
      const data = await response.json()

      if (this.storage.id === data.slip.id) {
        return
      }

      this.storage = data.slip

      this.updateAdvice(data.slip)
    } catch (error) {
      console.error('명언을 가져오는 중 오류 발생:', error)
      this.updateAdvice({
        id: 'error',
        advice: '명언을 불러오는 데 실패했습니다.'
      })
    }
  }
  updateAdvice({ id, advice }) {
    const container = this.el.querySelector('.container-wrapper')
    container.innerHTML = `
      <div id="${id}" class="advice">
        <p class="advice-description">${advice}</p>
      </div>
    `
  }
  render() {
    this.el.innerHTML = /* html*/ `
      <div class="container-advice">
        <div class="container-wrapper" aria-label="명언"></div>
        <input type="button" class="advice-get-btn" value="명언 생성하기" aria-label="명언 생성하기"/>
      </div>
    `

    this.el
      .querySelector('.advice-get-btn')
      .addEventListener('click', () => this.fetchApi())
  }
}

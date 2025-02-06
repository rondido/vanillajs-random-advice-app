import Component from '../core/Component'

export default class Header extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.innerHTML = /*html */ `
      <div class="header-container">
        <ul class="header-wrapper">
          <li class="logo-wrapper" aria-label="logo"><a href="#/"><span class="logo">Adviceslip</span>.com</a></li>
          <li class="search-wrapper" aria-label="검색 페이지 이동"><a href="#/">search</a></li>
          <li class="bookmark-wrapper" aria-label="내가 저장한 명언 모음"><a href="#/advice">advice</a></li>
          <li class="about" aria-label="만든 사람이 누구인가?
          "><a href="#/about">about</a></li>
        </ul>
        <div>
          <span aria-label="github 링크로 이동"><a href="https://github.com/rondido" target="_blank"><img src="/public/github.webp" alt="이미지"/></a></span>
        </div>
      </div>
    `
  }
}

import Component from '../core/Component'

export default class Search extends Component {
  constructor() {
    super()
  }

  render() {
    this.el.innerHTML = /* html*/ `
      <div>Search</div>
    `
  }
}

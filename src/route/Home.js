import Component from '../core/Component'

export default class Home extends Component {
  constructor() {
    super()
  }

  render() {
    this.el.innerHTML = /* html*/ `
      <div>Home</div>
    `
  }
}

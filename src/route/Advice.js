import Component from '../core/Component'

export default class Advice extends Component {
  constructor() {
    super()
  }

  render() {
    this.el.innerHTML = /* html */ `
      <div>advice</div>
    `
  }
}

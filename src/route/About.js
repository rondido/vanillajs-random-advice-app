import Component from '../core/Component'

export default class About extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>about</div>
    `
  }
}

import Header from './components/Header'
import Component from './core/Component'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    this.header = new Header().el
    const Container = document.createElement('Container')
    this.el.append(this.header, Container)
  }
}

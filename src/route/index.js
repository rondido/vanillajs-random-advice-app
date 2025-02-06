import Home from './Home'
import About from './About'
import Advice from './Advice'
import { createRouter } from '../core/Component'
import Search from './Search'
export default createRouter([
  {
    path: '#/',
    element: Home
  },
  {
    path: '#/advice',
    element: Advice
  },
  {
    path: '#/about',
    element: About
  },
  {
    path: '#/search',
    element: Search
  }
])

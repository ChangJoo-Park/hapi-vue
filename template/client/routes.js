import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'

export default [
  {
    path: '/',
    name: 'home-page',
    component: IndexPage
  },
  {
    path: '/about',
    name: 'about-page',
    component: AboutPage
  },
  {
    path: '*',
    redirect: '/'
  }
]

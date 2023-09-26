/* eslint-disable react/prop-types */
import './App.css'
import { Suspense, lazy } from 'react'
import Router from './Router'
import SearchPage from './pages/Search'
import Page404 from './pages/404'
import { Route } from './Route'

const LazyHomePage = lazy(() => import('./pages/Home'))
const LazyAboutPage = lazy(() => import('./pages/About'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]
function App() {
  

  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={routes} defaultComponent={Page404} >
          <Route path={'/'} Component={LazyHomePage}/>
          <Route path={'/about'} Component={LazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App

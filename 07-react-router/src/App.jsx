import { useEffect } from 'react'
import './App.css'
import HomePage from './pages/Home'

function navigate (href) {
  window.history.pushState({}, '', href)
  
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)


  return (
    <main>
      {currentPath === '/' && <HomePage /> }
    </main>
  )
}

export default App

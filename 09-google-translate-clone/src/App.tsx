import './App.css'
import { useStore } from './hooks/useStore'

function App() {
  const {fromLanguage, setFromLanguage} = useStore()

  const handleClick = () => {
    setFromLanguage('en')
  }

  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={handleClick}>Cambiar a ingles</button>
      <h2>{fromLanguage}</h2>
    </>
  )
}

export default App

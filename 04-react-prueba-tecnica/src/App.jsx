import './App.css'
import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'
import Otro from '../components/Otro'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>Aplicacion de gatos</h1>
      <button onClick={refreshFact}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Random cat fact image' />}

      <Otro />
    </main>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

const CAT_FACT_URL = 'https://catfact.ninja/fact'

const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then((res) =>
        // TODO: Handle error
        res.json())
      .then(response => {
        const { fact } = response
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Aplicacion de gatos</h1>
      <p>{fact}</p>
      {imageUrl && <img src={`https://cataas.com${imageUrl}`} alt='Random cat fact image' />}
    </main>
  )
}

export default App

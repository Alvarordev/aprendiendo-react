import { useState } from 'react'
import './App.css'
import Products from './components/products'
import { products as initialProducts } from './mocks/products.json'

function App() {
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <>
      <Products products={initialProducts} />
    </>
  )
}

export default App

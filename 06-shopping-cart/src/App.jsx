import './App.css'
import Products from './components/products'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header'
import Filters from './components/Filters'
import { useContext } from 'react'
import { FiltersContext } from './context/filters'

function App() {
  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header>
        <Filters onChange={setFilters}/>
      </Header>
      <Products products={filteredProducts} />
    </>
  )
}

export default App

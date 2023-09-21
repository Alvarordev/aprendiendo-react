/* eslint-disable react/prop-types */
import './filters.css'
import { useFilters } from '../hooks/useFilters';
import { useId } from 'react';

const Filters = () => {
    const {filters, setFilters} = useFilters()
    // const [minPrice, setMinPrice] = useState(0) --> Solo debe haber una fuente de la verdad - ❌ 2 estados para el mismo valor 

    const minPriceFilteredId = useId()
    const categoryFilteredId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
          }))
    }
    return ( 
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilteredId}>Precio a partir de:</label>
                <input id={minPriceFilteredId} type="range" min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilteredId}>Categoria: </label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptos</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
     );
}
 
export default Filters;
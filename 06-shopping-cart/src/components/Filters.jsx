/* eslint-disable react/prop-types */
import { useState } from "react";
import './filters.css'

const Filters = ({ onChange }) => {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
          }))
    }
    return ( 
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <input type="range" min='0' max='1000' onChange={handleChangeMinPrice} />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria: </label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptos</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
     );
}
 
export default Filters;
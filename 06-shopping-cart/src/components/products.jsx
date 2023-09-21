/* eslint-disable react/prop-types */
import './products.css'

const Products = ({ products }) => {
    return (
        <main className="products">
            <ul>
               { products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                    </li>
                ))}

            </ul>
        </main>
     );
}
 
export default Products;
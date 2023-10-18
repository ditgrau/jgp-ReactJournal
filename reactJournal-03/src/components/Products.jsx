import './Products.css'
import { AddToCartIcon } from './icons.jsx'

export function Products({ products }) {
    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0,10).map(product => (
                        <li key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.description} />
                            <div>
                                <span>{product.title}</span> - ${product.price}
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon />
                                </button>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </main>
    )

} 
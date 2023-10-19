import { useState } from 'react';
import './Filter.css'

export function Filter() {

    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    return (
        <section className="filter">
            <div>
                <label htmlFor='price'>Precio</label>
                <input type="range"
                    id='price'
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice} />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category">
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}
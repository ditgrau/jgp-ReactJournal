import { useState, useId } from 'react';
import './Filter.css'

export function Filter({ onChange }) {

    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        // setea dos estados
        setMinPrice(e.target.value)
        onChange(prevState => (
            {
                ...prevState,
                minPrice: e.target.value
            }
        ))
    }

    // copia el objeto del estado incial (app) y setea la categoria
    const handleChangeCategory = (e) => {
        onChange(prevState => (
            {
                ...prevState,
                category: e.target.value
            }
        ))
    }

    return (
        <section className="filter">
            <div>
                <label htmlFor='price'>Precio</label>
                <input type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice} />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}
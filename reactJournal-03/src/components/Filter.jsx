import { useState, useId } from 'react';
import './Filter.css'
import { useFilters } from '../hooks/useFilters';

export function Filter() {

    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => (
            {
                ...prevState,
                minPrice: e.target.value
            }
        ))
    }

    // copia el objeto del estado incial (app) y setea la categoria
    const handleChangeCategory = (e) => {
        setFilters(prevState => (
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
                    onChange={handleChangeMinPrice} 
                    value={filters.minPrice}/>
                <span>{filters.minPrice}</span>
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
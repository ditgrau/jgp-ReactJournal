import './Filter.css'

export function Filter() {
    return (

            <section className="filter">
                <div>
                    <label htmlFor='price'>Precio</label>
                    <input type="range" id='price'
                        min='0' max='2000' />
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
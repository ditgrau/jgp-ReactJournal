import { Products } from './components/Products'
import { Header } from './components/Header';
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react';
import { Filter } from './components/Filter';

function App() {

  const [products] = useState(initialProducts);

  // estado general para los filtros, en lugar de un estado por filtro
  // filtro por categoria y por precio
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  console.log(filters)

  //filtro: muestra todos los productos que coincidan con el estado inicial o con los nuevos valores asignados
  //en el parametro le pasamos los products del mock
  const filterProducts = (products) => {
    return products.filter(product => {
      // la sintaxis del .filter es como la del .map
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  // pasamos la funcion de actualizacion de estado "setFilters" por prop "onChange" directamente al nieto 
  return (
    <>
      <Header>
        <Filter onChange={setFilters} />
      </Header>
      <Products products={filteredProducts} />
    </>
  )
}

export default App

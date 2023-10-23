import { createContext , useState } from "react";

//crear contexto. Este es el contexto que consumimos
export const FiltersContext = createContext()

//crear el provider, para proveer el contexto. El children es toda la aplicacion. Este nos provee de acceso al contexto
export function FiltersProvider({ children }) {
    const [ filters, setFilters ] = useState(
        {
            category: 'all',
            minPrice: 0
        }
    )
    return (
        <FiltersContext.Provider value={
            {
                filters, 
                setFilters
            }
        }>
            {children}
        </FiltersContext.Provider>
    )
}
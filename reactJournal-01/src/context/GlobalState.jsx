import { createContext, useContext, useState } from "react";

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

export const GlobalProvider = ({ children }) => {

    const [state, setState] = useState([])

    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}
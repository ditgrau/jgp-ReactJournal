//renderiza el children que tiene cuando se le llama
export function Header({ children }) {
    return (
        <>
            <header>
                <h1>React Shop</h1>
                {children}
            </header>
        </>
    )
}
import './Footer.css'

export function Footer({ filters }) {
    return (
        <footer className="footer">
            <h4>Aprendiendo más de React</h4>
            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}
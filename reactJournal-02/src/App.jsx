import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fact, setFact] = useState("text")

  useEffect(() => {
    fetch('https://catfact.ninja/fact') //devuelve promesa
      .then(res => res.json()) //convierte la respuesta en un objeto json 
      .then(res => {//accede al dato de la respuesta
        const { fact } = data //almacena la fact 
        setFact(res.fact) //setea el estado

        const threeWords = fact.split('', 3) //me quedo con las 3 primeras palabras
      })
      
      fetch(`https://cataas.comhttps://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      {/* renderizado condicional */}
      {fact && <p>{fact}</p>}
    </>
  )
}

export default App

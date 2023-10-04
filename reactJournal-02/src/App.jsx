import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fact, setFact] = useState("text")

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json()) //convierte la respuesta en un objeto json 
      .then(res => setFact(res.fact)) //accede al dato de la respuesta 
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </>
  )
}

export default App

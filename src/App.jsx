import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import data from "./data"
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  const info = data.map(function (item) {
    return (
        <Card 
        key = {item.id}
        item = {item}
        />
        )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {info}
      </section>
    </div>
  )
}

export default App

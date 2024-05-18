import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'



import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
  
   
      
      <Footer/>
    </>
  )
}

export default App

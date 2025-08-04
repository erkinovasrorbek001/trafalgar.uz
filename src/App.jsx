import React from 'react'
import './App.css'
import Slider from './components/Slider/Slider'
import Header from './components/Header/Header'
import Ourser from './components/ourser/Ourser'
import Leading from './components/Leading/Leading'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
     <Header/>
     <Leading/>
     <Ourser/>
     <Slider/>
     <Card/>
     <Footer/>
     </>
  )
}

export default App

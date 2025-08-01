import React from 'react'
import './App.css'
import Slider from './components/Slider/Slider'
import Ourser from './components/ourser/Ourser'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='min-h-screen bg-blue-50 flex items-center justify-center p-6'>
     <Header/>
     <Slider/>
     <Ourser/>
    </div>
  )
}

export default App

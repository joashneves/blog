import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hud from './components/molecules/Hud.tsx'

function App() {

  return (
    <>
      <Hud inicio='Inicio' posts='Posts' project='Project' contato='Contato'/>
    </>
  )
}

export default App

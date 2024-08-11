import { useState } from 'react'
import Header from './component/Header/Header'
import './App.css'
import FlashcardHome from './component/FlashcardHome/FlashcardHome'

function App() {


  return (
    
   
    <div className=' w-screen h-screen flex flex-col   gap-20'>
     <Header/>
     <FlashcardHome/>

    
    </div>
  
  
  )
}

export default App

import React, { useEffect, useState } from 'react'
import '../../index.css'
const Flashcard = ({obj}) => {
    
   const [click,setclick]=useState(false);
useEffect(()=>{
setclick(false);
},[obj])
function handleflip(e){
  e.target.classList.remove("load")
  e.target.offsetWidth
  e.target.classList.add("load")
  setclick(!click)
}
  return (
    <>
     
      <div className=" w-[400px]  h-[300px]  flex   justify-center items-center bg-purple-200 text-white"  >
        <div  className=  "bg-slate-900 ease-in-out w-4/5 h-4/5 rounded p-4 text-center duration-200 font-mono" onClick={(e)=>handleflip(e)}>
           <p className=' font-extralight pb-2'> {(click)? "answer":"question" }:</p>
          {(click)?obj.answer:obj.question}
        </div>
      </div>


    </>
  )
}

export default Flashcard

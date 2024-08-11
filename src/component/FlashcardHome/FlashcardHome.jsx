import React, { useState } from 'react'
import Flashcard from '../Flashcard/Flashcard'
const FlashcardHome = () => {
    // fatch later by api or by provide categories later on decide
    const faq = [
        {
            question: "What is JavaScript?",
            answer: "JavaScript is a programming language commonly used to create interactive effects within web browsers."
        },
        {
            question: "What is an array in JavaScript?",
            answer: "An array is a special variable, which can hold more than one value at a time."
        },
        {
            question: "How do you create an object in JavaScript?",
            answer: "You can create an object using curly braces {} and defining key-value pairs inside."
        },
        {
            question: "What is a function in JavaScript?",
            answer: "A function is a block of code designed to perform a particular task, and it is executed when 'something' invokes it."
        },
        {
            question: "What is the use of the 'let' keyword in JavaScript?",
            answer: "'let' is used to declare a variable that is block-scoped, meaning it is only available within the block it was declared."
        }
    ];
const [index,setindex]=useState(0);


  return (
    <center className="">
        
      <Flashcard obj={faq[index]}/>
      <div className='flex justify-between items-center w-[400px] p-2  bg-yellow-200 '> 
            <button className='btn' onClick={()=>{(index>0)?setindex(index-1):setindex(faq.length-1)}}>previous</button>
            <button  className='btn' onClick={()=>{(index<faq.length-1)?setindex(index+1):setindex(0)}}>forward</button>
      </div>
     
    </center>
  )
}

export default FlashcardHome

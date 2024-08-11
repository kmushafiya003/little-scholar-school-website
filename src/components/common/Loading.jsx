import React from 'react'

function Loading() {
    return (
        <div class='flex space-x-2 justify-center items-center bg-black h-screen dark:invert'>
            <span class='sr-only'>Loading...</span>
            <div class='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.10s]'></div>
            <div class='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.8s]'></div>
            <div class='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.6s]'></div>
            <div class='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.4s]'></div>
            <div class='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.2s]'></div>
   
           
        </div>
    )
}

export default Loading
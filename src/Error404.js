import React from 'react'
import { BiSad } from 'react-icons/bi'
function Error404() {
    return (
        <div className='flex flex-col items-center h-full bg-sky-100 p-4 justify-center'>
            <BiSad className='h-10 w-10' />
            <br />
            <h1>Oops! Something went wrong</h1>
        </div>
    )
}

export default Error404
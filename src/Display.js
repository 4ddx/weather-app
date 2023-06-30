import React from 'react'
import { TbWind } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'
import { FaTemperatureFull } from 'react-icons/fa6'

const Display = ({ city, temp, humidity, wspeed, desc }) => {
    return (
        <div className='flex flex-col bg-sky-200 w-full items-center justify-evenly border hover:border-neutral-800 transition'>
            <p>City: {city}</p>
            <div className='flex flex-row items-center justify-evenly w-full'>
                <p className='text-md flex items-center'><FaTemperatureFull className='h-10 w-10' />{temp}</p>
                <p className='text-md flex items-center'><WiHumidity className='h-10 w-10' /> {humidity}</p>
                <p className='text-md flex items-center'><TbWind className='h-10 w-10' /> {wspeed}</p>
            </div>
            <div className='flex flex-row items-center justify-evenly w-full'>
                <p className='text-md flex items-center'><FaTemperatureFull className='h-10 w-10' />{desc}</p>

            </div>
        </div>
    )
}

export default Display
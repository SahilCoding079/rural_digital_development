import React from 'react'

const Card = ({heading, text, icon, btn, className}) => {
  return (
    <main className='bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col'>
      <div className="flex gap-3 md:gap-4">
        {icon && <div className={`${className} `}>{icon}</div>}
        <div className='flex flex-col flex-1 min-w-0'>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">{heading}</h3>
          <p className="text-gray-700 text-xs md:text-sm line-clamp-3 flex-1">{text}</p>
        </div>
      </div>
      <div className="mt-3 md:mt-4 flex justify-end">
        <div className="border-2 border-gray-300 rounded-full p-1 md:p-2 hover:bg-green-700 hover:text-white transition-colors duration-300 cursor-pointer text-sm md:text-base">
          {btn}
        </div>
      </div>
    </main>
  )
}

export default Card

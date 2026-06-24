import React from 'react'

const StatsCard = ({icon, number, text, className}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-2 space-x-4">
      <div className={`${className}`}>
        {icon}
      </div>
      <div>
        <h3 className={`text-xl font-semibold ${className}`}>{number}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

export default StatsCard;

import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <div>
      <div className="h-64 w-90 rounded-md bg-gray-200 shadow-sm">
        {
          props.image ?
            <img className='object-cover rounded-md h-full w-full' src={props.image} alt={props.title} />
            : null
        }
      </div>
      <div className="flex flex-col mt-2">
        <span className='poppins-font font-bold text-lg text-black'>{props.title}</span>
        <p className='poppins-font text-sm text-gray-800'>{props.desc}</p>
      </div>
      <p className='satoshi-font font-bold text-md underline cursor-pointer text-gray-800 hover:text-gray-900'>Veiw more</p>
    </div>
  )
}

export default Card
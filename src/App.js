import React from 'react'
import Logo from './assets/Logo.png'
import pdf from './assets/pdf.png'
import Card from './Components/Card'
import { work } from './data'

function App() {
  console.log(work)
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='w-56 object-cover'>
          <img src={Logo} alt="pratishlmc" />
        </div>
        <div className='opacity-0 md:opacity-100 satoshi-font flex gap-10 text-md font-semibold'>
          <span className='hover:underline cursor-pointer'>Work</span>
          <span className='hover:underline cursor-pointer'>Resume</span>
          <span className='hover:underline cursor-pointer'>Contact</span>
        </div>
      </div>
      <p className="inter-font text-md mt-5 text-gray-700">
        Hello👋, I am a Developer/Designer focused
        <br />
        on creating beautiful, intiutive web interfaces.
      </p>
      <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 gap-y-12 '>
        {
          work.map((item, index) => <Card title={item.title} desc={item.description} image={item.image} />)
        }
      </div>

      <div className='mt-14 flex flex-col'>
        <span className='satoshi-font font-extrabold text-2xl'>
          Get in touch
        </span>
        <div className='mt-3 text-center p-3 rounded-sm cursor-pointer bg-blue-700 w-fit '>
          <span className='satoshi-font text-white font-semibold text-lg'>
            pratishlmc@gmail.com
          </span>
        </div>
        <div className='mt-4 flex items-center'>
          <img src={pdf} alt="resume" height={50} width={50} />
          <span className='cursor-pointer satoshi-font font-semibold underline text-lg'>
            resume-pratishlmc.pdf
          </span>
        </div>
      </div>
    </>
  )
}

export default App
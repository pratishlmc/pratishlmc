import React from 'react';

// import woman image
import MainPng from '../assets/img/pratishlmc.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[5px]'>
              Hey, I'm Pratish! 👋
            </p>
            <h1 className='text-3xl leading-[36px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-4 md:pt-6 md:pb-10 max-w-[480px] text-lg text-center lg:text-left'>
              You there? 👀
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={MainPng} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

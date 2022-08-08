import React from 'react';

// import img
import Image from '../assets/img/aboutme.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Pratish Lamichhane
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Web & Application Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I'm Pratish, a developer located in Nepal. I am seriously passionate for developing web and mobile applications. <br />
                <br />
                Optimistic, Well-organised, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature,
                I enjoy every questions & ideas which comes up while coding. I'm loving the journey and moving on, someday I'd like to create something of my own, something new and something big.
              <br />
                <span className="text-blue-500">Let's build something, together.</span>
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react'
import image from '../../assets/images/img1.jpg'

function about() {
  return (
    <div className='w-full h-screen bg-white flex md:flex-col items-center px-20 md:px-0 md:py-10'>
      <img src={image} alt=""  className='w-1/2 md:w-11/12 border-8 md:border-4 border-black rounded-3xl'/>
      <div className='p-10 w-1/2 md:w-11/12 flex flex-col items-start md:items-center md:text-center'>
        <h1 className='font-bold text-4xl md:text-3xl'>Who Are We ?</h1>
        <p className='mt-4 text-slate-700 md:text-xs'>
        Welcome to Estate Kings Basketball Academy, where passion meets precision.
         Our mission is to nurture talent and foster a love for the game through top-tier 
         coaching and state-of-the-art facilities. From beginners to advanced players, 
         our tailored programs ensure skill development, teamwork, and sportsmanship.
        Join us to elevate your game and be part of a community dedicated to excellence both on and off the court.
        </p>
        <button className='mt-5 px-5 py-3 bg-Basketball text-white font-semibold rounded-[30px]'>
            Learn more...
        </button>
      </div>
    </div>
  )
}

export default about

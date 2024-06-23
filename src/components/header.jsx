import React from 'react'
import logo from '../assets/images/kings-logo.png'
import menuImg from '../assets/images/menu-outline.svg'
import closeImg from '../assets/images/icon-close.svg'

function header() {
    const [menu, setMenu] = React.useState(false)
    const toggleMenu = () =>{
        setMenu(prev => !prev)
    }
  return (
    <div className='flex w-full text-white justify-between px-7 md:px-4 py-3 items-center absolute top-0 '>
      <img src={logo} alt="" className='w-20' />
      <div className='flex gap-10 md:hidden'>
        <p className='hover-underline'>Home</p>
        <p>About Us</p>
        <p>Programs</p>
        <p>Gallery</p>
      </div>

      <button className='bg-Basketball hover:bg-white hover:text-black font-bold px-5 p-2 rounded-3xl border-2 border-black transition md:hidden'>
        Contact Us
      </button>

      <div className='bg-Basketball p-2 rounded-full hover:bg-white border-2 border-black hidden md:block ' onClick={toggleMenu}>
        <img src={menuImg} alt="" className='w-10' />
      </div>
      {menu && <div className='h-screen w-[100%] bg-white absolute top-0 right-0 flex flex-col items-center'>
        <div className='w-full flex justify-end p-3 px-4'>
            <div onClick={toggleMenu} className='bg-Basketball p-3  rounded-full border-2 border-black hover:bg-white'>
                <img src={closeImg} alt="" className='w-4' />
            </div>
        </div>

        <div className='text-black text-center flex flex-col gap-5'>
        <p>Home</p>
        <p>About Us</p>
        <p>Programs</p>
        <p>Gallery</p>
      </div>

      <button className='bg-Basketball hover:bg-white hover:text-black font-bold px-5 p-2 rounded-3xl border-2 border-black transition mt-5'>
        Contact Us
      </button>
      </div> }
    </div>
  )
}

export default header

import React from 'react'
import logo from './../../assets/tuf.png'
const Header = () => {
  return (
    // <div className='w-screen h-20  border-b border-grey '>
    //   <div ><img className='w-40 h-20 ' src={logo} alt="logo" /></div>
    // </div>
    <div className='border-b border-gray-100 px-20 text-white flex justify-between items-center'>
        <img width="100px" src={logo} alt="" />
        <dfn title="menu -> do nothing">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

        </dfn>
    </div>
  )
}

export default Header

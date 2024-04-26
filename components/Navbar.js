import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16 '>
      <div className="logo font-bold text-lg flex justify-center items-center ">
        <img src="tea.gif" width={58} alt="" />
        <span>Get Me A Chai</span>
      </div>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Sign UP</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={"/login"}>
          <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Login
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

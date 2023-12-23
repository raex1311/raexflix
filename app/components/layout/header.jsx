import React from 'react'
import Image from 'next/image'
import NavLink from '../ui/NavLink'
import Logo from '@/public/images/logo.png'

const header = () => {
  return (
      <div className='bg-gray-800 flex p-3 item-center gap-3'>
          <Image
              src={Logo}
              width={50}
              height={50}
              alt="RaeXFlix"
          />
        <nav className = 'container'>
              <ul className='flex flex-row-reverse gap-3 px-4 my-3'>

                  <li>
                      <NavLink href='/contact'>Contact</NavLink>
                  </li>
                  <li>
                      <NavLink href='/about'>About</NavLink>
                  </li>

                  <li>
                      <NavLink href='/'>Home</NavLink>
                  </li>
              </ul>
        </nav>
      </div>
  )
}

export default header
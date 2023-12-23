import React from 'react'
import { Image} from "@nextui-org/react";

const about = () => {
  return (
      <div className='bg-gray-900 min-h-screen'>
          <div className='max-w-[1320px] mx-auto flex h-screen justify-center items-center sm:flex-row flex-col'>
              <div className=' basis-[50%] mx-2'>
                  <Image
                      alt="About Us"
                      className="object-cover w-full"
                      height="100%"
                      src="/images/logo.png"
                      // src = {imageSrc}
                      width="100%"
                  />
              </div>
              <div className='basis-[40%] mx-4 py-4'>
                  <h1 className='text-white items-center text-4xl'><b>About Us</b></h1>
                  <p className='text-white py-3 '>
                      I am just making this website as a fun project.
                      And maybe some personal needs or watching movies with family members.
                      I hope you like it.
                  </p>
                  <p className='py-3 text-white'>
                    My gamer tag is RaeX. So I named this site RaeXFlix. Lmao.
                  </p>
              </div>
          </div>
      </div>
  )
}

export default about
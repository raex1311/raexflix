import React from 'react'
import VideoPlayer from "@/app/components/VideoPlayer";


const getTopicByID = async(id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/metadata/${id}`,
         {cache: 'no-store'}
         )
         if(!res.ok){
            throw new Error(`Could not fetch metadata for ${id}`);
         }
         return res.json();
    }
    catch(err){
        console.log("Error Loading Topics: ",err)
    }
}

export default async function page({params})  {
    const {id} = params;
    const {metadata} = await getTopicByID(id);
    const {title, description,url, category} = metadata;
  return (
      <div className='bg-gray-900 min-h-screen'>
          <div className='max-w-[1320px] flex mx-3'>
              <div className="basic-[60%] mx-4 my-4">
                  <VideoPlayer theurl = {url}/>
              </div>
          </div>
          <div className='max-w-[1320px] flex mx-3'>
              <div className=' flex-col gap-3 mx-4 my-4 border border-2 border-gray-500 bg-gray-800 rounded-xl'>
                  <h1 className='text-white mx-3 my-3'><b>Movie Title:</b> {title}</h1>
                  <p className='text-white mx-3 my-3'><b>Category:</b> {category}</p>
                  <p className='text-white mx-3 my-3'><b>Movie Description:</b> {description}</p>
              </div>
          </div>
      </div>
  )
}

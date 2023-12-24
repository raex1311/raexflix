// pages/index.js
import React from "react";
import MyCard from "./card";
import mongoose from "mongoose";

const getMetadata = async() =>{
    try{
        const res = await fetch(`${process.env.LOCAL_URI}/api/metadata`,
         {cache: 'no-store'}
         )
 
         if(!res.ok){
             console.error('Fetching topics failed');
         }
         return res.json();
     }
     catch(err){
         console.log("Error Loading Topics: ",err)
     }
}

export default async function cardLayout() {
    const {metadata2} = await getMetadata();
  return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 grid-cols-2">
          {metadata2.map(t => (  
        <MyCard key={t._id} title={t.title} playerID={t._id} imageSrc={t.image} />
        ))}
      </div>

  );
};

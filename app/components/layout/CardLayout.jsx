// pages/index.js
import React from "react";
import MyCard from "./card";
import mongoose from "mongoose";

const getMetadata = async() =>{
    try{
        const res = await fetch('http://localhost:3000/api/metadata',
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
    const {metadata} = await getMetadata();
  return (
      <div className="grid grid-cols-4">
          {metadata.map(t => (  
        <MyCard title={t.title} playerID={t._id} imageSrc={t.image} />
        ))}
      </div>

  );
};

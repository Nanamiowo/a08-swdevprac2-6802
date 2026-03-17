"use client"

import { useState } from "react"
import Link from "next/link"

export default function Card({
  vid,
  name,
  rating
}:{vid:string,name:string,rating?:number}){

  const [score,setScore] = useState(rating ?? 0)

  return(

    <Link href={`/venue/${vid}`}>

      <div className="bg-white shadow-lg rounded-lg p-4 w-[250px]">

        <img src="/img/venue.jpg"/>

        <h2>{name}</h2>

        {rating !== undefined && (

          <div className="flex gap-1">

            {[1,2,3].map((star)=>(
              <span
                key={star}
                className={`cursor-pointer ${star<=score ? "text-yellow-400":"text-gray-300"}`}
                onClick={(e)=>{
                  e.stopPropagation()
                  e.preventDefault()
                  setScore(star)
                }}
              >
                ★
              </span>
            ))}

          </div>

        )}

      </div>

    </Link>
  )
}
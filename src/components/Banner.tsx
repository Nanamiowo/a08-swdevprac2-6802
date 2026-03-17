"use client"

import { useState } from "react"
import Link from "next/link"

export default function Banner(){

  const images = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg"
  ]

  const [index,setIndex] = useState(0)

  function changeImage(){
    setIndex((index+1)%images.length)
  }

  return(
    <div className="relative w-full h-[400px]">

      <img
        src={images[index]}
        onClick={changeImage}
        className="w-full h-full object-cover cursor-pointer"
      />

      <Link href="/venue">
        <button
          className="absolute bottom-5 right-5 bg-red-500 px-5 py-2 rounded-lg shadow-md hover:bg-blue-400 text-white"
        >
          ลองเอาเมาส์มาชี้ดูสิ~
        </button>
      </Link>

    </div>
  )
}